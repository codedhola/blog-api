const bcrypt = require("bcrypt")
const HandleError = require("../utils/handleError")
const { signToken, verifyToken } = require("./../utils/jwtToken")
const userQueries = require("./../database/queries/userQueries")
const { emailValidator } = require("./../utils/validator")
require("dotenv").config()
const { Client } = require("./../config/db")


const signUp = async (req, res, next) => {
    try{
        // GET REQUIRED DATA FROM CLIENT AND CHECK IF VALID
        const { firstName, lastName, email, password, gender } = req.body
        if(!email || !password || !firstName) return next(new HandleError("You must specify 'Email' , 'Password' and 'firstname'", 400))
        
        // VALIDATE EMAIL
        const validEmail = emailValidator(email)
        if(!validEmail) return next(new HandleError("Invalid email provided", 400))

        // CHECK IF EMAIL DOES NOT EXIST IN DATABASE
        const checkMail = await Client.query(userQueries.checkEmail, [email])
        if(checkMail.rows.length) return next(new HandleError("Email Already exist", 400))
        password
        // ENCRYPT PASSWORD
        const salt = await bcrypt.genSalt(Number(process.env.GENSALT))
        const hashPassword = await bcrypt.hash(password, salt)
        
        // SAVE TO DATABASE
        const userQuery = await Client.query(userQueries.createUser, [firstName, lastName, email, hashPassword, gender])
        const newUser = userQuery.rows[0]

        // SIGN TOKEN
        const token = await signToken(newUser)
        res.cookie("jwt", token, {  expires: new Date(Date.now() + 60 * 24 * 60 * 1000), httpOnly: true })

        // SEND TOKEN TO CLIENT
        res.status(201).json({
            status: "Success",
            response: {
                data: {
                email,
                username,
                token
            }}
        })
    }catch(err){
        console.log(err)
        next(new HandleError(err, 400))
    }
}

const login = async (req, res, next) => {
    try{
        // GET THE LOGIN DETAILS
        const { email, password } = req.body
        if(!email || !password) return next(new HandleError("'Email' and 'Password' required", 400))    

        const checkMail = await Client.query(userQueries.checkEmail, [email])

        if(!checkMail.rows.length || !(await bcrypt.compare(password, checkMail.rows[0].password))) return next(new HandleError("Incorrect email or password", 400))
        
        // SIGN TOKEN
        const token = await signToken(checkMail.rows[0])
        res.cookie("jwt", token, {  expires: new Date(Date.now() + 60 * 24 * 60 * 1000), httpOnly: true })

        res.status(200).json({
            status: "Suceess",
            response: {
                message: "Logged in Succesfully",
                token
            }
        })
    }catch(err){
        console.log(err)
        next(new HandleError(err, 400))
    }
}

const protect = async (req, res, next) => {
    try{
        // CHECK IF TOKEN IS AVAILABLE
        let token;
        if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")){
            token = req.headers.authorization.split(" ")[1]
        }

        // RETURN ERROR IF NOT LOGGED IN 
        if(!token) return next(new HandleError("Please log in to access this page", 401))
    
        // DESTRUCTURE JWT TOKEN 
        const user = await verifyToken(token)
        if(!user) return next(new HandleError("Invalid token, please login", 400))
    
        // TRANSFER TOKEN ID TO NEXT FUNCTION 
        req.userStamp = user
        next()
    }catch(err){
        console.log(err)
        next(err, 500)
    }
}

const verifyRole = (role) => async (req, res, next) => {
    // FETCH USERS DATA
    const user = await Client.query(userQueries.getAUser, [req.userStamp.userID])

    // VERIFY IS USER IS ALLOWED
    if(role !== user.rows[0].is_admin) return next(new HandleError("Not allowed to perform this operation", 403))

    req.user = user.rows[0]
    next()
}


module.exports = {
    signUp,
    login,
    protect,
    verifyRole
}