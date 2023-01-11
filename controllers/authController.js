const signUp = (req, res, next) => {
    try{
        // GET REQUIRED DATA FROM CLIENT AND CHECK IF VALID


        // CHECK IF EMAIL DOES NOT EXIST IN DATABASE

        // ENCRYPT PASSWORD

        // SAVE TO DATABASE

        // SEND TOKEN TO CLIENT
        console.log(email, password, name, phone )
        res.status(201).json({
            status: "Success",
            data: email, name
        })
    }catch(err){

    }
}


module.exports = {
    signUp
}