require("dotenv").config({path: "./config/config.env"})
const Connection = require("./config/db")

Connection()