// USER QUERIES

const userQueries = {
    getAllUser: `SELECT * FROM users;`,
    createUser: `INSERT INTO users(email, password, username) VALUES($1, $2, $3) RETURNING *;`,
    checkEmail: `SELECT user_id, email, password FROM users WHERE email = $1;`
}

module.exports = userQueries