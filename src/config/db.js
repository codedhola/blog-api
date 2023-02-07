const pg = require("pg").Pool
const {
   DB_REMOTE_HOST, DB_REMOTE_USERNAME, DB_REMOTE_DATABASE,
   DB_REMOTE_PASSWORD
} = process.env
let Client;

if(process.env.NODE_ENV === "development"){
   Client = new pg({
      host: "localhost",
      port: process.env.DB_PORT,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
   })
    
   
}else if(process.env.NODE_ENV === "production"){
   Client = new pg({
      host: DB_REMOTE_HOST,
      port: process.env.DB_PORT,
      user: DB_REMOTE_USERNAME,
      password: DB_REMOTE_PASSWORD,
      database: DB_REMOTE_DATABASE,
      ssl: true
   })
}else {
   Client = new pg({
      host: "localhost",
      port: process.env.DB_PORT,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
   })
}

module.exports = {
   Client
 }