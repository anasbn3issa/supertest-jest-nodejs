
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
  // should return a 400 status code to show there was a user error.
  // should return a json object that contains an error message.
  // should specify json as the content type in the http header.
  })
})



// app.test.js: Imports app.js and tests all of the endpoints.