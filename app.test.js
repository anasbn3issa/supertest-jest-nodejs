
const request = require('supertest')
const app = require('./app.js')
describe("POST /users", () => {
    describe("when passed a username and password", () => {
        test("should respond with a 200 status code", async () => {
          const response = await request(app).post("/users").send({ 
            username: "username", 
            password: "password" 
          })
          expect(response.statusCode).toBe(200)
        })
      })

    describe("when the username or password is missing", () => {
        test("should return a 400 status code", async () => {
            const bodies = [
            { username: "username" },
            { password: "password" }
            ]
            for (const body of bodies) {
            const response = await request(app).post("/users").send(body)
            expect(response.statusCode).toBe(400)
            }
        })
    })
})



// app.test.js: Imports app.js and tests all of the endpoints.