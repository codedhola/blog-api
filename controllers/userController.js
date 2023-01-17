const { Client: DB } = require("./../config/db")
const userQuery = require("./../database/queries/userQueries")

const getUsers = async (req, res, next) => {
    try{
        console.log(req.user, req.newUser)
        // const response = await DB.query(userQuery.getAllUser)
        res.status(200).json({ 
            status: "success",
            response : {
                // data: response.rows
            }
        })
    }catch(err){
        console.log(err)
        res.status(400).json({ 
            status: "Failed",
            message: "Error🔥 " + err
        })
    }
}

module.exports = {
    getUsers
}