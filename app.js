var express = require('express');
var router = express.Router();
var app = express();
app.use(express.json());

var users = [];

router.get('/users', async function(req, res) {
  console.log("[Users#Index]");

  res.json(users);
});

router.get('/users/:id', async function(req, res) {
  console.log("[Users#Show]");
  console.log(req.params);

  var id = req.params.id;

  res.json(users[id]);
});

router.post('/users', async function(req, res) {
  console.log("[Users#Create]");
  console.log(req.params);
  console.log(req.body);

  var user = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    age: req.body.age,
    weight: req.body.weight
  };

  users.push(user);
  res.json(user);
});

router.put('/users/:id', async function(req, res) {
  console.log("[Users#Update]");
  console.log(req.params);
  console.log(req.body);

  var id = req.params.id;

  users[id] = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    age: req.body.age,
    weight: req.body.weight
  };

  var user = users[id];
  res.json(user);
});

router.delete('/users/:id', async function(req, res) {
  console.log("[Users#Destroy]");
  console.log(req.params);

  var id = req.params.id;
  var user = users[id];

  users.splice(id, 1);
  res.json(user);
});

app.use(router);

module.exports = app;

