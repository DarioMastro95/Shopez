var express = require('express');
var path = require('path');
var router = express.Router();
var Smartphone = require('../mongoSchemi/Smartphone');
var User = require('../mongoSchemi/User');


router.get('/dashboard',function(req,res){
  if(!req.session.user){
    return res.status(400).send();
  }
  res.setHeader('Content-Type','text/html');
  res.sendFile(path.join(__dirname,'..','view','adminPage.html'));
});

router.post('/smartphone',function(req,res){
  var smartphone = new Smartphone();
});

router.post('/login',function(req,res){
  var username = req.body.username;
  var password = req.body.password;
  console.log(username+' '+password);
  User.findOne({username:username,password:password},function(err,user){
    if(err || !user){
      console.log('Errore login');
      return res.status(404).send();
    }
    req.session.user = user;
    res.redirect('/dashboard');
  });

});

module.exports = router;
