const express = require("express");

const app = express()

app.use(express.json())

app.post('/users', async (req, res) => {
  const { username, password } = req.body
  if (!username || !password) {
    res.send(400)
    return
  }
  res.send({userId: 0})
})

module.exports = app;

// Contains the express code to define and implement all of the HTTP routes.