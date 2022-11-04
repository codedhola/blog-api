const express = require("express")
const app = express()
const userRoutes = require("./routes/userRoute")
const blogRoutes = require("./routes/blogRoute")

app.use("/api/v1/users", userRoutes);
app.use("/api/v1/blogs", blogRoutes)

module.exports = app