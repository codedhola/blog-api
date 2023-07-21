const bcrypt = require("bcrypt");
const HandleError = require("../utils/handleError");
const { signToken, verifyToken, randomString } = require("./../utils/jwtToken");
const userQueries = require("./../database/queries/userQueries");
const password_query = require("./../database/queries/resetQueries");
const { emailValidator } = require("./../utils/validator");
require("dotenv").config();
const { Client } = require("./../config/db");

const signUp = async (req, res, next) => {
  try {
    // GET REQUIRED DATA FROM CLIENT AND CHECK IF VALID
    const { username, email, password, gender } = req.body;
    if (!email || !password || !username)
      return next(
        new HandleError(
          "You must specify 'Email' , 'Password' and 'username'",
          400
        )
      );

    // VALIDATE EMAIL
    const validEmail = emailValidator(email);
    if (!validEmail)
      return next(new HandleError("Invalid email provided", 400));

    // CHECK IF EMAIL DOES NOT EXIST IN DATABASE
    const checkMail = await Client.query(userQueries.checkEmail, [email]);
    if (checkMail.rows.length)
      return next(new HandleError("Email Already exist", 400));
    password;
    // ENCRYPT PASSWORD
    const salt = await bcrypt.genSalt(Number(process.env.GENSALT));
    const hashPassword = await bcrypt.hash(password, salt);

    // SAVE TO DATABASE
    const userQuery = await Client.query(userQueries.createUser, [
      username,
      email,
      hashPassword,
    ]);
    const newUser = userQuery.rows[0];

    // SIGN TOKEN
    const token = await signToken(newUser);
    res.cookie("jwt", token, {
      expires: new Date(Date.now() + 60 * 24 * 60 * 1000),
      httpOnly: true,
    });

    // SEND TOKEN TO CLIENT
    res.status(201).json({
      status: "Success",
      token,
      response: {
        data: {
          email,
          username,
        },
      },
    });
  } catch (err) {
    console.log(err);
    next(new HandleError(err, 400));
  }
};

const login = async (req, res, next) => {
  try {
    // GET THE LOGIN DETAILS
    const { email, password } = req.body;
    if (!email || !password)
      return next(new HandleError("'Email' and 'Password' required", 400));

    const checkMail = await Client.query(userQueries.checkEmail, [email]);

    if (
      !checkMail.rows.length ||
      !(await bcrypt.compare(password, checkMail.rows[0].password))
    )
      return next(new HandleError("Incorrect email or password", 400));

    // SIGN TOKEN
    const token = await signToken(checkMail.rows[0]);
    res.cookie("jwt", token, {
      expires: new Date(Date.now() + 60 * 24 * 60 * 1000),
      httpOnly: true,
    });

    res.status(200).json({
      status: "Suceess",
      response: {
        message: "Logged in Succesfully",
        token,
      },
    });
  } catch (err) {
    console.log(err);
    next(new HandleError(err, 400));
  }
};

const protect = async (req, res, next) => {
  try {
    // CHECK IF TOKEN IS AVAILABLE
    let token;
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];
    }

    // RETURN ERROR IF NOT LOGGED IN
    if (!token)
      return next(new HandleError("Please log in to access this page", 401));

    // DESTRUCTURE JWT TOKEN
    const user = await verifyToken(token);
    if (!user) return next(new HandleError("Invalid token, please login", 400));

    // TRANSFER TOKEN ID TO NEXT FUNCTION
    req.userStamp = user;
    next();
  } catch (err) {
    console.log(err);
    next(err, 500);
  }
};

const verifyRole = (role) => async (req, res, next) => {
  // FETCH USERS DATA
  const user = await Client.query(userQueries.getAUser, [req.userStamp.userID]);

  // VERIFY IS USER IS ALLOWED
  if (role !== user.rows[0].roles)
    return next(new HandleError("Not allowed to perform this operation", 403));

  req.user = user.rows[0];
  next();
};

const forgotpassword = async (req, res, next) => {
  const email = req.body.email;

  try {
    // CONFIRM IF EMAIL EXIST IN DATABASE
    const checkMail = await Client.query(userQueries.checkEmail, [email]);

    if (!checkMail.rows.length)
      return next(new HandleError("Incorrect email", 400));

    const { user_id } = checkMail.rows[0];
    const token = randomString();
    console.log(user_id, token);
    // CREATE A TOKEN TO SAVE IN THE DATABASE AND SEND ROUTE TO EMAIL
    const createToken = await Client.query(
      password_query.create_password_reset,
      [user_id, token]
    );

    const resetUrl = `${req.protocol}://${req.get(
      "host"
    )}/api/v1/users/auth/reset-password/${token}`;
    res.status(200).json({
      status: "success",
      data: `"reset token is below`,
      response: resetUrl,
    });
  } catch (err) {
    console.log(err);
    next(err, 500);
  }
};

const resetpassword = async (req, res, next) => {
  try {
    const token = req.params.token;

    const user_token = await Client.query(password_query.get_token, [token]);

    if (!user_token.rows.length)
      return next(
        new HandleError("User Token not found or expired please try again", 400)
      );

    const user = await Client.query(userQueries.getAUser, [
      user_token.rows[0].user_id,
    ]);
    if (!user.rows.length)
      return next(
        new HandleError("User Token not found or expired please try again", 400)
      );
    const salt = await bcrypt.genSalt(Number(process.env.GENSALT));
    const hashPassword = await bcrypt.hash(req.body.password, salt);
    await Client.query(password_query.reset_password, [
      hashPassword,
      user.rows[0].user_id,
    ]);

    await Client.query(password_query.delete_token, [user.rows[0].user_id]);

    res.status(200).json({
      status: "success",
      data: "password reset successful",
    });
  } catch (err) {
    console.log(err);
    next(err, 500);
  }
};

module.exports = {
  signUp,
  login,
  protect,
  verifyRole,
  forgotpassword,
  resetpassword,
};
