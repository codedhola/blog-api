const query = {
    createBlog: `INSERT INTO blog(title, body, slug, authour) VALUES($1, $2, $3, $4) RETURNING *;`,
    getBlogs: `SELECT * FROM blog`
}

module.exports = query