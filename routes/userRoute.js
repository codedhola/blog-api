const router = require("express").Router()
const userController = require("../controllers/userController")
const authController = require("./../controllers/authController")

router.get("/", userController.getUsers)

router.post("/auth/sign-up", authController.signUp)

module.exports = router;