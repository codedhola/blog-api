const query = {
    getBlogs: `SELECT * FROM blog`,
    getABlog: `SELECT * FROM blog WHERE blog_id = $1`,
    createBlog: `INSERT INTO blog(title, body, slug, authour) VALUES($1, $2, $3, $4) RETURNING *;`,
    editBlog:`UPDATE blog SET title = COALESCE($1, title), body = $COALESCE($2, body), state = $COALESCE($3, state) WHERE id = S4 RETURNING *`,
    deleteBlog: `DELETE FROM blog WHERE blog_id = $1`
}

module.exports = query