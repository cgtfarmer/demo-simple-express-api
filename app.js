var express = require('express');
var router = express.Router();
var app = express();

app.use(express.json());

router.get("/", async function(request, response) {
  response.end("Welcome to my API")
})

router.get("/hello", async function(request, response) {
  response.end("Hello. How are you?")
})

router.get("/john-greeting", async function(request, response) {
  var name = "John"
  var greeting = "Hello, " + name + ", how are you?"
  response.end(greeting)
})

router.get("/random-greeting", async function(request, response) {
  var names = ["John", "Jane", "Chad"]
  var randomIndex = Math.floor(Math.random() * 3)
  var name = names[randomIndex]

  var greeting = "Hello, " + name + ", how are you?"
  response.end(greeting)
})

router.get("/intentional-greeting", async function(request, response) {
  /**
   * FOR GET REQUEST:
   * var request = {
   *   query: {
   *     name: "John"
   *   }
   * }
   */

  // var name = "John";
  var name = request.query.name
  // var name = request.body["name"]

  var greeting = "Hello, " + name + ", how are you?"
  response.end(greeting)
})

router.post("/users", async function(request, response) {
  console.log("[POST] Users")
  var user = request.body

  console.log(user)

  // Save user here

  response.end(`User: ${user.firstName} ${user.lastName}, successfully saved!`)
})

app.use(router)

module.exports = app
