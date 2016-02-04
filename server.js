var express = require('express');
var bodyParser = require('body-parser')
var app = express();
var PORT = 8080

app.use(bodyParser.urlencoded({extended: false}));

app.get('/login', function(req, res) {
  res.sendFile(process.cwd() + "/views/login.html");
});
app.get('/home', function(req, res) {
  res.sendFile(process.cwd() + "/views/home.html");
});
app.get('/account', function(req, res) {
  res.sendFile(process.cwd() + "/views/account.html");
});
app.get('/help', function(req, res) {
  res.sendFile(process.cwd() + "/views/help.html");
});

app.post("/login", function(req, res) {
  var login = david;
  var password = password;

  if(login === req.body.login && password === req.body.password){
    res.redirect('/account');
  }
  else{
    res.send("Incorrect Login")
  }

});


app.listen(PORT, function() {
  console.log("App listening on port %s", PORT);
});