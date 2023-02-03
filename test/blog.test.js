const request = require("supertest")

const app = require("../src/app")

describe("BLOG API ROUTES", () => {
    test('GET /api/v1/blog', () => {
        return request(app).get("/api/v1/blog")
        .expect("Content-Type", /json/)
        .expect(200)
        .end(function(err, res){
            if(err) throw err
        })
    })


})