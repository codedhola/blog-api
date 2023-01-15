const jwt = require("jsonwebtoken")
const {  promisify } = require("util")

const signToken = async (userID) => {
    return await promisify(jwt.sign)({userID: userID.user_id}, process.env.JWT_SECRET, { expiresIn: '1h'})
}

const verifyToken = async (token) => {
    return await promisify(jwt.verify)(token, process.env.JWT_SECRET)
}

module.exports = { signToken, verifyToken }