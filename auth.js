var express = require('express');
var bodyParser = require('body-parser')
var session = require('express-session')
var middleware = require('./middleware')
var PORT = 8080

app = express()

app.use(bodyParser.urlencoded({extended: false}));

app.use(session({
  secret: 'david stichter 3414 gmail com',
  cookie: {
    maxAge: 300000
  },
  saveUninitialized: true,
  resave: false
}));

app.get('/', function (req, res){
  res.sendFile(process.cwd() + "/home.html");
});
app.get('/login', function (req, res){
  res.sendFile(process.cwd() + "/login.html");
});
app.get('/account', function(req, res){
  if(req.auth === true){
    res.sendFile(process.cwd() + "/account.html");
  }
});

app.post("/login", middleware.myMiddleWare, function(req, res) {

});

app.listen(PORT, function() {
  console.log("App listening on port %s", PORT);
});