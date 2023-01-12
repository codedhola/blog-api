const express = require("express")
const userRoutes = require("./routes/userRoute")
const blogRoutes = require("./routes/blogRoute")
const app = express()

app.use(express.json())

app.use("/api/v1/users", userRoutes);
app.use("/api/v1/blogs", blogRoutes)


app.all("*", (req, res, next) => {
    const err = new HandleError(`Route ${req.originalUrl} can't be found on the server`, 404);  // Better Error Handler
    next(err);
})

app.use((err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.status = err.status || "Error"

    return res.status(err.statusCode).json({
        status: err.status,
        error: err,
        message: err.message,
        stack: err.stack
      });

})

module.exports = app