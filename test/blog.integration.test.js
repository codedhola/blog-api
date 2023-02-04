const request = require("supertest")
const pg = require("pg").Client
require("dotenv").config()
console.log(process.env.DB_NAME)

describe("Blogs Test", () => {
  
  let app
  let Client
  beforeEach(function () {
    // Create a new pool with a connection limit of 1
    Client = new pg({
      host: "localhost",
      port: process.env.DB_PORT,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      max: 1
   })
    
    // It's important to import the app after mocking the database connection
    app = require('../src/app')    
  })
  // Optionally we could insert fake data before each test, but in this case it's not needed
  // beforeEach('Insert fake data', async function () {
  //   await client.query('INSERT INTO pg_temp.note (name, content) VALUES ("a_note", "some_content")')
  // })

  afterEach(async function () {
    Client.end()
  })


    it("should get all blogs", async () => {
      const res = await request(app).get("/api/v1/blogs")
      
        expect(res.statusCode).toEqual(200)
        expect(res.body.status).toEqual("Success")
        expect(res.body.data).toHaveProperty("response")
        expect(Array.isArray(res.body.data.response)).toBe(true)
    })

    it("should get all blogs", async () => {
      const res = await request(app).post("/api/v1/blogs").send({
        "title": "spring boot Engineering",
        "description": "A Tale of java backend engineering",
        "body": "java is a programming  language used in top organisations and spring boot is a framework for java for developing serverside app..."   
       })

      
        expect(res.statusCode).toEqual(401)
        expect(res.body.status).toEqual("Fail")
        // expect(res.body.data).toHaveProperty("response")
        // expect(res.body.data.response).toBe(Object) 
    })

    it('should return 200 and a token on successful login', async () => {
      const res = await request(app)
        .post('/api/v1/users/auth/login').auth("token", 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI0MzZmNmE3Yi0zNzFiLTRhMTMtYmQzNC0xM2M2ZDkyYjc2YTciLCJpYXQiOjE2NzU1MzkxMTAsImV4cCI6MTY3NTU0MjcxMH0.r49fPuV9-rtZrXItuPL5dQ5k-_WnSU4iiDCm57Iczuk')
        .send({
          email: 'codedhola@gmail.com',
          password: 'developer'
        });
  
      expect(res.statusCode).toEqual(200);
      expect(res.body.response).toHaveProperty('token');
      expect(typeof res.body.response.token).toBe('string');
    });


  })



