const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const HandleError = require("../utils/handleError")
const userQueries = require("./../database/queries/userQueries")
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
        const newUser = await Client.query(userQueries.createUser, [email, password, username])
        // SAVE TO DATABASE
        console.log(newUser.rows)
        // SEND TOKEN TO CLIENT
        res.status(201).json({
            status: "Success",
            data: {
                data: email, username
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