// USER QUERIES
const getAllUser = `SELECT * FROM users`;

const createUser = `INSERT INTO users(email, password, is_admin, username VALUES($1, S2, $3, $4);`

module.exports = {
    getAllUser,
    createUser
}