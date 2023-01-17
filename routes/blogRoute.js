const router = require("express").Router()
const blogController = require("../controllers/blogController")
const auth = require("./../controllers/authController")

router.get("/", blogController.getBlogs)

router.post("/", auth.protect, blogController.createBlog)

router.get("/:id", blogController.getABlog)

router.delete("/:id", auth.protect, auth.verifyRole(true), blogController.deleteBlog)

module.exports = router