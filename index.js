var express = require('express');
var app = express();
var path = require('path')
var fs = require("fs");
var bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use('/',express.static(path.join(__dirname, 'public')))
var users = [
   {
      "name" : "1",
   },
   {
      "name" : "2",
   },
   {
      "name" : "3",
   }
]

app.put('/user/:id', function (req, res) {
  var userkey = parseInt(req.params.id) 
  users[userkey] = req.body
  res.end( JSON.stringify(users));
})
app.delete('/user/:id', function (req, res) {
  var userkey = parseInt(req.params.id) 
  users.splice(userkey,1)
  res.end( JSON.stringify(users));
})
app.get('/user/:id', function (req, res) {
  var userkey = parseInt(req.params.id) 
  res.end( JSON.stringify(users[userkey]));
})
app.get('/users', function (req, res) {
  res.end( JSON.stringify(users));
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

