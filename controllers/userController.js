const { Client: DB } = require("./../config/db")
const userQuery = require("./../database/queries/userQueries")

const getUsers = async (req, res, next) => {
    try{
        const response = await DB.query(userQuery.getAllUser);
        console.log(response)
        res.status(200).json({ 
            status: "success",
            message: "successful"
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