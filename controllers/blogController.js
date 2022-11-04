const getBlogs = (req, res, next) => {
    res.status(200).json({
        status: "Success",
        message: "Blog route is valid"
    })
}

module.exports = {
    getBlogs
}