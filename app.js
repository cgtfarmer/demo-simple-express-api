var express = require('express')
var app = express()

app.use(express.json())

app.get("/", async function(request, response) {
  response.end("Welcome to my API")
})

app.get("/hello", async function(request, response) {
  response.end("Hello. How are you?")
})

app.get("/john-greeting", async function(request, response) {
  var name = "John"
  var greeting = "Hello, " + name + ", how are you?"
  response.end(greeting)
})

app.get("/random-greeting", async function(request, response) {
  var names = ["John", "Jane", "Chad"]
  var randomIndex = Math.floor(Math.random() * 3)
  var name = names[randomIndex]

  var greeting = "Hello, " + name + ", how are you?"
  response.end(greeting)
})

app.get("/get-req-greeting", async function(request, response) {
  /**
   * # GET Request Structure:
   * # Assuming URL query: http://localhost:3000/get-req-greeting?name=John&age=25&extra-stuff=Meow
   * var request = {
   *   query: {
   *     name: "John",
   *     age: 25,
   *     extra-stuff: "Meow",
   *   }
   * }
   */

  var name = request.query["name"]
  var age = request.query["age"]
  var extraStuff = request.query["extra-stuff"]

  var greeting = "Hello, " + name + ", who is " + age + "years old. How are you? " + extraStuff
  response.end(greeting)
})

app.post("/users", async function(request, response) {
  /**
   * # POST Request Structure:
   * # Assuming JSON body: { name: "John", age: 25 }
   * var request = {
   *   body: {
   *     name: "John",
   *     age: 25
   *   }
   * }
   */

  var name = request.body["name"]
  var age = request.body["age"]
  var extraStuff = request.body["extra-stuff"]

  var greeting = "Hello, " + name + ", who is " + age + "years old. How are you? " + extraStuff
  response.end(greeting)
})

app.listen(3000, function() {
  console.log("App listening on port 3000")
})

module.exports = app
