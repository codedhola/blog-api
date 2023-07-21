const password_query = {
  create_password_reset: `INSERT INTO password_resets(user_id, token, created_at, updated_at) VALUES($1, $2, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP) RETURNING *;`,

  get_token: `SELECT *
  FROM password_resets WHERE token = $1
  ;`,

  reset_password: `UPDATE users SET password = $1 WHERE user_id = $2 RETURNING *;`,

  // deleteBlog: `DELETE FROM blog WHERE blog_id = $1;`,
};

module.exports = password_query;
