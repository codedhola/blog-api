// USER QUERIES

const userQueries = {
    getAllUser: `SELECT * FROM users;`,
    createUser: `INSERT INTO users(email, password, username) VALUES($1, $2, $3) RETURNING *;`,
    checkEmail: `SELECT email FROM users WHERE email = $1;`
}

module.exports = userQueries