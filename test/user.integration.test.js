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

    it("Registering an existing user to database", async () => {
      const {body, statusCode} = await request(app).post("/api/v1/users/auth/sign-up").send({
          "firstName": "coded",
          "lastName": "hola",
          "email" : "codedhola@gmail.com",
          "password": "developer",
          "gender": "male"
      })
      
      expect(statusCode).toEqual(400)
        expect(body).toEqual(
          Object({
            status: "Fail",
            // error: expect.any(Object)
          })
        )
    })

    it("Registering a new user to database", async () => {
        const {body, statusCode} = await request(app).post("/api/v1/users/auth/sign-up").send({
            "firstName": "Michael",
            "lastName": "Scofied",
            "email" : "mikschole@gmail.com",
            "password": "developer",
            "gender": "male"
        })
        
          expect(body).toEqual(
            Object({
              status: "Success",
              response: {
                data: {
                  firstName: expect.any(String),
                  lastName: expect.any(String),
                  email: expect.any(String),
                  password: expect.any(String),
                  gender: expect.any(String),
                  is_admin: expect.any(Boolean),
                }
              }
            })
          )
          expect(statusCode).toEqual(201)
      })
})