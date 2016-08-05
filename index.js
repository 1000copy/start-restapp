var express = require('express');
var app = express();
var fs = require("fs");
var bodyParser = require('body-parser')
app.use(bodyParser.json())
var users = [
   {
      "name" : "1",
      "password" : "password1",
      "profession" : "teacher",
   },
   {
      "name" : "2",
      "password" : "password1",
      "profession" : "teacher",
   },
   {
      "name" : "3",
      "password" : "password1",
      "profession" : "teacher",
   }
]

app.get('/user/:id', function (req, res) {
  var userkey = parseInt(req.params.id) 
  res.end( JSON.stringify(users[userkey]));
})
app.post('/user', function (req, res) {
  users.push(req.body)
  // console.log(JSON.stringify(req.body))
  res.end(JSON.stringify(users))
})
var server = app.listen(8080, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("listening at http://%s:%s", host, port)

})

