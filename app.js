const express = require("express")
const userRoutes = require("./routes/userRoute")
const blogRoutes = require("./routes/blogRoute")
const app = express()

app.use("/api/v1/users", userRoutes);
app.use("/api/v1/blogs", blogRoutes)

module.exports = app