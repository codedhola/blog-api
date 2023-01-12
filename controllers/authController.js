const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const signUp = (req, res, next) => {
    try{
        // GET REQUIRED DATA FROM CLIENT AND CHECK IF VALID
        const { email, password, is_admin, username } = req.body

        // CHECK IF EMAIL DOES NOT EXIST IN DATABASE

        // ENCRYPT PASSWORD

        // SAVE TO DATABASE

        // SEND TOKEN TO CLIENT
        console.log(email, password, is_admin, username )
        res.status(201).json({
            status: "Success",
            data: {
                data: email, username
            }
        })
    }catch(err){
        console.log(err)
    }
}


module.exports = {
    signUp
}