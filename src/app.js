const express = require("express")
const userRoutes = require("./routes/userRoute")
const blogRoutes = require("./routes/blogRoute")
const HandleError = require("./utils/handleError")
const errorConfig = require("./config/errorConfig")
const app = express()

app.use(express.json())

app.get("/", (req, res) => { 
    res.sendFile(`${__dirname}/public/index.html`)
})
app.get("/api/v1/", (req, res) => {
    res.redirect("/")
})
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/blogs", blogRoutes)


app.all("*", (req, res, next) => {
    const err = new HandleError(`Route ${req.originalUrl} can't be found on the server`, 404);  // Better Error Handler
    next(err);
})

app.use(errorConfig)

module.exports = app