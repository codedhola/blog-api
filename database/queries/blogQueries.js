const query = {
    createBlog: `INSERT INTO blog(title, body, slug, authour) VALUES($1, $2, $3, $4) RETURNING *;`,
    getBlogs: `SELECT * FROM blog`,
    deleteBlog: `DELETE FROM blog WHERE blog_id = $1`
}

module.exports = query