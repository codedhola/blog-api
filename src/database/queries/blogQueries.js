const query = {
  getBlogs: `SELECT * FROM blog LIMIT $1;`,
  getABlog: `SELECT blog.title, blog.description, blog.body, blog.state, blog.tag, blog.read_time, blog.read_count, blog.created_at, blog.slug, users.first_name AS Author, users.gender
    FROM blog
    INNER JOIN users
    ON blog.author_id = users.user_id
    WHERE blog_id = $1
    ;`,
  createBlog: `INSERT INTO blog(title, body, slug, author) VALUES($1, $2, $3, $4) RETURNING *;`,
  editBlog: `UPDATE blog SET title = COALESCE($1, title), body = COALESCE($2, body), state = COALESCE($3, state) WHERE id = $4 RETURNING *;`,
  deleteBlog: `DELETE FROM blog WHERE blog_id = $1;`,
};

module.exports = query;
