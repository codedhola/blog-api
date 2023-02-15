const slug = require("slug")
const HandleError = require("../utils/handleError")
const { Client } = require("./../config/db")
const blogQuery = require("./../database/queries/blogQueries")


const getBlogs = async (req, res, next) => {
    const {limit, page} = req.query
    console.log(limit, page)
    const pagination = [limit]
    try{
        //  GET ALL BLOGS
        const data = await Client.query(blogQuery.getBlogs, pagination)
        
        
        return res.status(200).json({
            status: "Success",
            results: data.rowCount,
            response: {
                data: data.rows}
        })
    }catch(err){
        console.log(err)
        next(new HandleError(err, 500))
    }
}

const getABlog = async (req, res, next) => {
    const id = req.params.id;
    try{
        const blog = await Client.query(blogQuery.getABlog, [id])
        
        if(!blog.rows.length) return next(new HandleError("Blog doesn't Exist", 404))
        return res.status(200).json({
            status: "Success",
            response: {
                data: blog.rows[0]}
        })
    }catch(err){
        console.log(err)
        next(new HandleError(err, 500))
    }
}

const createBlog = async (req, res, next) => {
    try{
        // GET BODY DATA => { title, body , slug, authour } 
        const { title, description, body } = req.body
        const slugTitle = slug(title)
        
        const data = [title, description, body, slugTitle, req.userStamp.userID]
        // ADD DATA TO DATABASE
        const response = await Client.query(blogQuery.createBlog, data)

        return res.status(201).json({
            status: "Success",
            response:{ 
                data: response.rows
            }
        })
        
    }catch(err){
        console.log(err)
        next(new HandleError(err, 500))
    }
}

const editBlog = async (req, res, next) => {
    const { title, body , state } = req.body
    const data = [title, body, state, req.params.id]
    try{
        const blog = await Client.query(blogQuery.editBlog, [data])

        if(!blog.rows.length) return next(new HandleError("Blog doesn't Exist", 404))
        return res.status(200).json({
            status: "Success",
            response:{ 
                data: blog.rows
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

        return res.status(204).json({
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
    editBlog,
    deleteBlog
}