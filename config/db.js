const pg = require("pg").Client
require("dotenv").config()

const Client = new pg({
   host: "localhost",
   port: process.env.DB_PORT,
   user: process.env.DB_USER,
   password: process.env.DB_PASSWORD,
   database: process.env.DB_NAME,
})

module.exports = {
   Client
 }