const request = require("supertest")
const pg = require("pg").Client
require("dotenv").config()

describe("Tests For the user endpoints", () => {
  
    let app
    let Client
    beforeEach(function () {
      Client = new pg({
        host: "localhost",
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        max: 1
     }) 
     app = require('../src/app')    
    })
  
    afterEach(async function () {
      Client.end()
    })

    it("Registering a user in the database", async () => {
        const res = await request(app).post("/api/v1/users/auth/sign-up").send({
            "firstName": "coded",
            "lastName": "Hola",
            "email" : "codedhola@gmail.com",
            "password": "developer",
            "gender": "male"
        })
        
          expect(res.statusCode).toEqual(400)
          expect(res.body.status).toEqual("Fail")
        //   expect(res.body.data).toHaveProperty("response")
        //   expect(Array.isArray(res.body.data.response)).toBe(true)
      })


})