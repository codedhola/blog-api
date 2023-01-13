const bcrypt = require("bcrypt")
const HandleError = require("../utils/handleError")
const { signToken } = require("./../utils/jwtToken")
const userQueries = require("./../database/queries/userQueries")
require("dotenv").config()
const { Client } = require("./../config/db")


const signUp = async (req, res, next) => {
    try{
        // GET REQUIRED DATA FROM CLIENT AND CHECK IF VALID
        const { email, password, username } = req.body
        if(!email || !password || !username) return next(new HandleError("You must specify 'Email' , 'Password' and 'username'", 400))

        // CHECK IF EMAIL DOES NOT EXIST IN DATABASE
        const checkMail = await Client.query(userQueries.checkEmail, [email])
        if(checkMail.rows.length) return next(new HandleError("Email Already exist", 400))

        // ENCRYPT PASSWORD
        const salt = await bcrypt.genSalt(Number(process.env.GENSALT))
        const hashPassword = await bcrypt.hash(password, salt)
        
        // SAVE TO DATABASE
        const userQuery = await Client.query(userQueries.createUser, [email, hashPassword, username])
        const newUser = userQuery.rows[0]

        // SIGN TOKEN
        const token = await signToken(newUser)
        res.cookie("jwt", token, {  expires: new Date(Date.now() + 60 * 24 * 60 * 1000), httpOnly: true })
        
        // SEND TOKEN TO CLIENT
        res.status(201).json({
            status: "Success",
            data: {
                email,
                username,
                token
            }
        })
    }catch(err){
        console.log(err)
        next(new HandleError(err, 400))
    }
}


module.exports = {
    signUp
}