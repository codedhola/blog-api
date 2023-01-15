const slug = require("slug")
const HandleError = require("../utils/handleError")
const { Client } = require("./../config/db")
const blogQuery = require("./../database/queries/blogQueries")


const getBlogs = async (req, res, next) => {

    //  GET ALL BLOGS
    const data = await Client.query(blogQuery.getBlogs)
    res.status(200).json({
        status: "Success",
        data: data.rows
    })
}

const createBlog = async (req, res, next) => {
    try{
        // GET BODY DATA => { title, body , slug, authour } 
        const { title, body } = req.body
        const slugTitle = slug(title)
        
        const data = [title, body, slugTitle, req.user.userID]
        console.log(data)
        // ADD DATA TO DATABASE
        const response = await Client.query(blogQuery.createBlog, data)

        res.status(201).json({
            status: "Success",
            data: response.rows
        })
        
    }catch(err){
        console.log(err)
        next(new HandleError(err, 500))
    }
}



module.exports = {
    getBlogs,
    createBlog
}