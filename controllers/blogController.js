const slug = require("slug")
const HandleError = require("../utils/handleError")
const { Client } = require("./../config/db")
const blogQuery = require("./../database/queries/blogQueries")


const getBlogs = async (req, res, next) => {

    //  GET ALL BLOGS
    const data = await Client.query(blogQuery.getBlogs)
    res.status(200).json({
        status: "Success",
        data: {
            response: data.rows}
    })
}

const getABlog = async (req, res, next) => {
    const id = req.params.id;
    try{
        const blog = await Client.query(blogQuery.getABlog, [id])
        
        res.status(200).json({
            status: "Success",
            data: {
                response: blog.rows}
        })
    }catch(err){
        console.log(err)
        next(new HandleError(err, 500))
    }
}

const createBlog = async (req, res, next) => {
    try{
        // GET BODY DATA => { title, body , slug, authour } 
        const { title, body } = req.body
        const slugTitle = slug(title)
        
        const data = [title, body, slugTitle, req.userStamp.userID]
        // ADD DATA TO DATABASE
        const response = await Client.query(blogQuery.createBlog, data)

        res.status(201).json({
            status: "Success",
            data:{ 
                response: response.rows
            }
        })
        
    }catch(err){
        console.log(err)
        next(new HandleError(err, 500))
    }
}

const deleteBlog = async (req, res, next) => {
    try {
        const id = req.params.id;
        await Client.query(blogQuery.deleteBlog, [id])

        res.status(204).json({
            status: "Success"
        })

    }catch(err){
        console.log(err)
        next(new HandleError(err, 500))
    }
}

module.exports = {
    getBlogs,
    getABlog,
    createBlog,
    deleteBlog
}