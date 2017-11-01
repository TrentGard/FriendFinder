var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var PORT = process.env.PORT || 3000;
var path = require('path');
var friends = require('../data/friends.js');

console.log(friends);

var friend = [];

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/api", function(req, res) {
	res.sendFile(path.join(__dirname, "../app/data/friends.js"))
});

app.get("/public/survey", function(req, res){
	res.sendFile(path.join(__dirname, '../public/survey.html'))
});

app.post("/api", function(req, res){
	var profile = req.body;
	friend.push(profile);
	console.log(friend);
	res.end();
});

app.post("/api/new", function(req, res) {
  var profile = req.body;

  console.log(friend);

  friend.push(profile);

  res.end();

});

app.listen(PORT, function(){
	console.log("App is listening on PORT "+PORT);
});