exports.myMiddleWare = function myMiddleWare (req, res, next){
  req.auth = false
  if(req.body.email = "david.stichter3414@gmail.com" && req.body.password === "password"){
    req.auth = true
  }
  else if (req.auth === true){
    console.log("YO")
    res.redirect('/account;')
    res.end()
  }
  else {
    res.redirect('/');
  }
}

