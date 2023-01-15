const router = require("express").Router()
const blogController = require("../controllers/blogController")
const auth = require("./../controllers/authController")

router.get("/", blogController.getBlogs)

router.post("/", auth.isLoggedIn, blogController.createBlog)

module.exports = router