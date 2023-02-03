// USER QUERIES

const userQueries = {
    getAllUser: `SELECT user_id, email, username, active FROM users;`,
    getAUser: `SELECT * FROM users WHERE user_id = $1`,
    createUser: `INSERT INTO users(first_name, last_name, email, password, gender) VALUES($1, $2, $3, $4, $5) RETURNING *;`,
    checkEmail: `SELECT user_id, email, password FROM users WHERE email = $1;`
}

module.exports = userQueries