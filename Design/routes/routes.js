var express = require('express');
var path = require('path');
var router = express.Router();
var Smartphone = require('../mongoSchemi/Smartphone');
var User = require('../mongoSchemi/User');

//servizi

//dashboard
router.get('/dashboard',function(req,res){
  if(!req.session.user){
    return res.status(400).send();
  }
  res.setHeader('Content-Type','text/html');
  res.sendFile(path.join(__dirname,'..','view','adminPage.html'));
});
//get pagina articoli
router.get('/home/migliorismartphone/smartphonetop',function(req,res){
  res.sendFile(path.join(__dirname,'..','public','smartphoneTop.html'));
});
// get home
router.get('/home',function(req,res){
  res.sendFile(path.join(__dirname,'..','public','index.html'));
});
//get scelta smartphone
router.get('/home/migliorismartphone',function(req,res){
  res.sendFile(path.join(__dirname,'..','public','migliorismartphone2018.html'));
});
//get contatti
router.get('/home/contatti',function(req,res){
  res.sendFile(path.join(__dirname,'..','public','contatti.html'));
});
//get smartphone in base alla fascia
router.get('/smartphone/:fascia',function(req,res){
    var fasciaSmartphone = req.params.fascia;
    var fascia;
    switch (fasciaSmartphone) {
      case 'Fasciaalta':
        fascia = 'Fascia alta';
        break;
      default:

    }
    Smartphone.find({fascia:fascia},function(err,smartphones) {
        if(err){
          return res.send('Nessuno Smartphone')
        }
        return res.send(smartphones);
    });
});
// post smartphone in db
router.post('/smartphone',function(req,res){
  if(!req.session.user){
    return res.status(400).send();
  }
  var fascia = req.body.fascia;
  var position = req.body.position;
  Smartphone.findOne({fascia:fascia,position:position},function(err,findedSmartphone){
    if(err){
      return res.send({success:false,extra:err.toString()});
    }
    if(findedSmartphone){
      findedSmartphone.titolo = req.body.titolo;
      findedSmartphone.recensione = req.body.recensione;
      findedSmartphone.immagine = req.body.immagine;
      findedSmartphone.link = req.body.link;
      findedSmartphone.batteria = req.body.batteria;
      findedSmartphone.fotocamera = req.body.fotocamera;
      findedSmartphone.display = req.body.display;
      findedSmartphone.memoria = req.body.memoria;
      findedSmartphone.processore = req.body.processore;
      findedSmartphone.ram = req.body.ram;
      findedSmartphone.rete = req.body.rete;
      findedSmartphone.so = req.body.so;
      findedSmartphone.pro = req.body.pro;
      findedSmartphone.contro = req.body.contro;
      findedSmartphone.position = req.body.position;
      findedSmartphone.fascia = req.body.fascia;
      findedSmartphone.save();
      return res.send({success:true,extra:'Smartphone sovrascritto'});
    }
    var smartphone = new Smartphone();
    smartphone.titolo = req.body.titolo;
    smartphone.recensione = req.body.recensione;
    smartphone.immagine = req.body.immagine;
    smartphone.link = req.body.link;
    smartphone.batteria = req.body.batteria;
    smartphone.fotocamera = req.body.fotocamera;
    smartphone.display = req.body.display;
    smartphone.memoria = req.body.memoria;
    smartphone.processore = req.body.processore;
    smartphone.ram = req.body.ram;
    smartphone.rete = req.body.rete;
    smartphone.so = req.body.so;
    smartphone.pro = req.body.pro;
    smartphone.contro = req.body.contro;
    smartphone.position = req.body.position;
    smartphone.fascia = req.body.fascia;
    smartphone.save();
    return res.send({success:true,extra:'Nuovo smartphone inserito'});
  });

});
//login in admin dashboard
router.post('/login',function(req,res){
  var username = req.body.username;
  var password = req.body.password;
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
