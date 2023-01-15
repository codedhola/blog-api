const slug = require("slug")
const HandleError = require("../utils/handleError")

const getBlogs = (req, res, next) => {
    res.status(200).json({
        status: "Success",
        message: "Blog route is valid"
    })
}

const createBlog = async (req, res, next) => {
    try{
        // GET BODY DATA => { title, body , slug, authour } 
        const { title, body } = req.body
        const slugTitle = slug(title)
        // ADD DATA TO DATABASE
        console.log(title, body, slugTitle) 
    }catch(err){
        console.log(err)
        next(new HandleError(err, 500))
    }
}


module.exports = {
    getBlogs,
    createBlog
}