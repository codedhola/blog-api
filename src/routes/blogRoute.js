const router = require("express").Router()
const blogController = require("../controllers/blogController")
const auth = require("./../controllers/authController")

router.get("/", blogController.getBlogs)

router.get("/:id", blogController.getABlog)

router.post("/", auth.protect, blogController.createBlog)

router.put("/:id", blogController.editBlog)

router.delete("/:id", auth.protect, auth.verifyRole(true), blogController.deleteBlog)

module.exports = router