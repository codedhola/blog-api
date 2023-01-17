const query = {
    getBlogs: `SELECT * FROM blog`,
    getABlog: `SELECT * FROM blog WHERE blog_id = $1`,
    createBlog: `INSERT INTO blog(title, body, slug, authour) VALUES($1, $2, $3, $4) RETURNING *;`,
    deleteBlog: `DELETE FROM blog WHERE blog_id = $1`
}

module.exports = query