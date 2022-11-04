const getUsers = (req, res, next) => {
    res.status(200).json({ 
        status: "success",
        message: "successful"
    })
}

module.exports = {
    getUsers
}