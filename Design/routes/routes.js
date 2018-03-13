var express = require('express');
var path = require('path');
var router = express.Router();
var Smartphone = require('../mongoSchemi/Smartphone');
var GuidaTech = require('../mongoSchemi/guidaTech');
var GuidaSalute = require('../mongoSchemi/guidaSalute');
var GuidaFinanza = require('../mongoSchemi/guidaFinanza');
var User = require('../mongoSchemi/User');

//********************************************get pagine**********************************************
//dashboard
router.get('/dashboard', function(req, res) {
  if (!req.session.user) {
    return res.status(400).send();
  }
  res.setHeader('Content-Type', 'text/html');
  res.sendFile(path.join(__dirname, '..', 'views', 'adminPage.html'));
});
//get nuovoarticolo dash
router.get('/dashboard/nuovoarticolo', function(req, res) {
  if (!req.session.user) {
    return res.status(400).send();
  }
  res.setHeader('Content-Type', 'text/html');
  res.sendFile(path.join(__dirname, '..', 'views', 'adminArt.html'));
});
//get scelta tra anteprima o guida
router.get('/dashboard/nuovaguidaoanteprima', function(req, res) {
  if (!req.session.user) {
    return res.status(400).send();
  }
  res.setHeader('Content-Type', 'text/html');
  res.sendFile(path.join(__dirname, '..', 'views', 'adminGuidaoAnteprima.html'));
});
//get nuova guida
router.get('/dashboard/nuovaguida', function(req, res) {
  if (!req.session.user) {
    return res.status(400).send();
  }
  res.setHeader('Content-Type', 'text/html');
  res.sendFile(path.join(__dirname, '..', 'views', 'adminNuovaGuida.html'));
});
//get nuovaanteprimaguida dash
router.get('/dashboard/nuovaanteprimaguida', function(req, res) {
  if (!req.session.user) {
    return res.status(400).send();
  }
  res.setHeader('Content-Type', 'text/html');
  res.sendFile(path.join(__dirname, '..', 'views', 'adminAnteprimaGuida.html'));
});
//get guide tech
router.get('/home/guideacquistotech', function(req, res) {
  res.render(path.join(__dirname, '..', 'public', 'guideTech'));
});
//get smartphoneTop
router.get('/home/migliorismartphone/smartphonetop', function(req, res) {
  res.render(path.join(__dirname, '..', 'public', 'smartphoneTop'));
});
//get smartphoneMedi
router.get('/home/migliorismartphone/smartphonemedi', function(req, res) {
  res.render(path.join(__dirname, '..', 'public', 'smartphoneMedi'));
});
//get smartphoneBassi
router.get('/home/migliorismartphone/smartphonebassi', function(req, res) {
  res.render(path.join(__dirname, '..', 'public', 'smartphoneBassi'));
});
// get home
router.get('/home', function(req, res) {
  res.render(path.join(__dirname, '..', 'public', 'index'));
});
//get scelta smartphone
router.get('/home/migliorismartphone', function(req, res) {
  res.render(path.join(__dirname, '..', 'public', 'migliorismartphone'));
});
//get scelta tablet
router.get('/home/miglioritablet', function(req, res) {
  res.render(path.join(__dirname, '..', 'public', 'miglioritablet'));
});
//get scelta tv
router.get('/home/miglioritvsmart', function(req, res) {
  res.render(path.join(__dirname, '..', 'public', 'miglioritv'));
});
//get scelta pc
router.get('/home/miglioripcportatili', function(req, res) {
  res.render(path.join(__dirname, '..', 'public', 'miglioripc'));
});
//get scelta fotocamere
router.get('/home/migliorifotocamere', function(req, res) {
  res.render(path.join(__dirname, '..', 'public', 'migliorifotocamere'));
});
//get scelta droni
router.get('/home/miglioridroni', function(req, res) {
  res.render(path.join(__dirname, '..', 'public', 'miglioridroni'));
});
//get contatti
router.get('/home/contatti', function(req, res) {
  res.render(path.join(__dirname, '..', 'public', 'contatti'));
});
//***********************************************************************************************

//*****************************************Smartphone********************************************

//get smartphone in base alla fascia
router.get('/smartphone/:fascia', function(req, res) {
  var fasciaSmartphone = req.params.fascia;
  var fascia;
  switch (fasciaSmartphone) {
    case 'Fasciaalta':
      fascia = 'Fascia alta';
      break;
    case 'Fasciamedia':
      fascia = 'Fascia media';
      break;
    case 'Fasciabassa':
      fascia = 'Fascia bassa';
      break;
    default:

  }
  Smartphone.find({
    fascia: fascia
  }, function(err, smartphones) {
    if (err) {
      return res.send('Nessuno Smartphone')
    }
    return res.send(smartphones);
  });
});
// post smartphone in db
router.post('/smartphone', function(req, res) {
  if (!req.session.user) {
    return res.status(400).send();
  }
  var fascia = req.body.fascia;
  var position = req.body.position;
  Smartphone.findOne({
    fascia: fascia,
    position: position
  }, function(err, findedSmartphone) {
    if (err) {
      return res.send({
        success: false,
        extra: err.toString()
      });
    }
    if (findedSmartphone) {
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
      return res.send({
        success: true,
        extra: 'Smartphone sovrascritto'
      });
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
    return res.send({
      success: true,
      extra: 'Nuovo smartphone inserito'
    });
  });

});
//**************************************************************************************************

//*****************************************Guide Tech**************************************************
//post anteprima
router.post('/anteprimaGuida', function(req, res) {
  if (!req.session.user) {
    return res.status(400).send();
  }
  var titolo = req.body.titolo;
  GuidaTech.findOne({
    titolo: titolo
  }, function(err, findedGuida) {
    if (err) {
      return res.send({
        success: false,
        extra: err.toString()
      });
    }
    if (findedGuida) {
      return res.send({
        success: true,
        extra: 'Già presente nel db'
      });
    }
    var guidaTech = new GuidaTech();
    guidaTech.anteprima.titolo = req.body.titolo;
    guidaTech.anteprima.anteprima = req.body.anteprima;
    guidaTech.anteprima.immagine = req.body.immagine;
    guidaTech.anteprima.data = req.body.data;
    guidaTech.anteprima.categoria = req.body.categoria;
    guidaTech.anteprima.link = req.body.link;
    guidaTech.save();
    return res.send({
      success: true,
      extra: 'Nuova preview inserita'
    });
  });
});
//get anteprima
router.get('/guide/:categoria', function(req, res) {
  var categoriaGuida = req.params.categoria;
  GuidaTech.find({
    'anteprima.categoria':categoriaGuida
  }, function(err, anteprimaGuidas) {
    if (err) {
      return res.send('Nessuna anteprima ' + categoriaAnt)
    }
    return res.send(anteprimaGuidas);
  });
});
//get guidatech
router.get('/home/guideacquistotech/:link', function(req, res) {
  var linkGuida = req.params.link;
  GuidaTech.findOne({'anteprima.link':linkGuida},function(err,guidaTech){
    if(err){
      return res.send('Nessuna guida')
    }
    res.render('guida',{
      titolo:guidaTech.anteprima.titolo,
      introduzione:guidaTech.anteprima.anteprima
    });
  });

});

//****************************************Login page ***********************************************
//login in admin dashboard
router.post('/login', function(req, res) {
  var username = req.body.username;
  var password = req.body.password;
  User.findOne({
    username: username,
    password: password
  }, function(err, user) {
    if (err || !user) {
      console.log('Errore login');
      return res.status(404).send();
    }
    req.session.user = user;
    res.redirect('/dashboard');
  });

});
module.exports = router;
