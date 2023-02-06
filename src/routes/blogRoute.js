const router = require("express").Router()
const blogController = require("../controllers/blogController")
const auth = require("./../controllers/authController")

router.get("/", blogController.getBlogs)

router.get("/:id", blogController.getABlog)

router.post("/", auth.protect, auth.verifyRole(true), blogController.createBlog)

router.put("/:id", auth.protect, auth.verifyRole(true), blogController.editBlog)

router.delete("/:id", auth.protect, auth.verifyRole(true), blogController.deleteBlog)

module.exports = router