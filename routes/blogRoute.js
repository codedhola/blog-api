const router = require("express").Router()
const blogController = require("../controllers/blogController")
const auth = require("./../controllers/authController")

router.get("/", blogController.getBlogs)

router.post("/", auth.protect, blogController.createBlog)

router.delete("/:id", auth.protect, blogController.deleteBlog)

module.exports = router