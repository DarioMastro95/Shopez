var express = require('express');
var path = require('path');
var router = express.Router();
var Smartphone = require('../mongoSchemi/Smartphone');
var Tablet = require('../mongoSchemi/Tablet');
var Drone = require('../mongoSchemi/Drone');
var Tv = require('../mongoSchemi/Tv');
var Pc = require('../mongoSchemi/Pc');
var GuidaTech = require('../mongoSchemi/guidaTech');
var GuidaSalute = require('../mongoSchemi/guidaSalute');
var GuidaFinanza = require('../mongoSchemi/guidaFinanza');
var User = require('../mongoSchemi/User');

//********************************************Servizi pagine**********************************************
//get home
router.get('/', function(req, res) {
  res.redirect('/home');
});
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
  res.render(path.join(__dirname, '..', 'views', 'adminArt'));
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
//get guide saluteù
router.get('/home/guideacquistosalute', function(req, res) {
  res.render(path.join(__dirname, '..', 'public', 'guideSalute'));
});
//get pcTop
router.get('/home/miglioripc/pctop', function(req, res) {
  res.render(path.join(__dirname, '..', 'public', 'pcTop'));
});
//get pcMedi
router.get('/home/miglioripc/pcmedi', function(req, res) {
  res.render(path.join(__dirname, '..', 'public', 'pcMedi'));
});
//get pcBassi
router.get('/home/miglioripc/pcbassi', function(req, res) {
  res.render(path.join(__dirname, '..', 'public', 'pcBassi'));
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
//get tablet top
router.get('/home/miglioritablet/tablettop', function(req, res) {
  res.render(path.join(__dirname, '..', 'public', 'tabletTop'));
});
//get tablet medi
router.get('/home/miglioritablet/tabletmedi', function(req, res) {
  res.render(path.join(__dirname, '..', 'public', 'tabletMedi'));
});
//get tablet bassi
router.get('/home/miglioritablet/tabletbassi', function(req, res) {
  res.render(path.join(__dirname, '..', 'public', 'tabletBassi'));
});
//get tv top
router.get('/home/miglioritablet/tvTop', function(req, res) {
  res.render(path.join(__dirname, '..', 'public', 'tvTop'));
});
//get tv medi
router.get('/home/miglioritablet/tvMedie', function(req, res) {
  res.render(path.join(__dirname, '..', 'public', 'tvMedie'));
});
//get tv bassi
router.get('/home/miglioritablet/tvBasse', function(req, res) {
  res.render(path.join(__dirname, '..', 'public', 'tvBasse'));
});
//get drone top
router.get('/home/miglioridroni/dronitop', function(req, res) {
  res.render(path.join(__dirname, '..', 'public', 'droniTop'));
});
//get scelta tablet
router.get('/home/miglioritablet', function(req, res) {
  res.render(path.join(__dirname, '..', 'public', 'miglioritablet'));
});
//get scelta tv
router.get('/home/miglioritvsmart', function(req, res) {
  res.render(path.join(__dirname, '..', 'public', 'miglioritv'));
});

//get droni medi
router.get('/home/miglioridroni/dronimedi', function(req, res) {
  res.render(path.join(__dirname, '..', 'public', 'droniMedi'));
});

//get droni bassi
router.get('/home/miglioridroni/dronibassi', function(req, res) {
  res.render(path.join(__dirname, '..', 'public', 'droniBassi'));
});

//get Login
router.get('/login', function(req, res) {
  res.render(path.join(__dirname, '..', 'public', 'login'));
});

//get scelta pc
router.get('/home/miglioripc', function(req, res) {
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
//get anteprima guide per categoria
router.get('/guide/Tecnologia', function(req, res) {
      GuidaTech.find({
        'anteprima.categoria':'Tecnologia'
      }, function(err, anteprimaGuidat) {
        if (err) {
          return res.send('Nessuna anteprima ')
        }
        return res.send(anteprimaGuidat);
      });

});
router.get('/guide/Salute', function(req, res) {
      GuidaSalute.find({
        'anteprima.categoria':'Salute'
      }, function(err, anteprimaGuidas) {
        if (err) {
          return res.send('Nessuna anteprima ')
        }
        return res.send(anteprimaGuidas);
      });

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
//***********************************************************************************************

//*****************************************Pc portatili********************************************

//get smartphone in base alla fascia
router.get('/pc/:fascia', function(req, res) {
  var fasciaPc = req.params.fascia;
  var fascia;
  switch (fasciaPc) {
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
  Pc.find({
    fascia: fascia
  }, function(err, pcs) {
    if (err) {
      return res.send('Nessuno Pc')
    }
    return res.send(pcs);
  });
});
// post smartphone in db
router.post('/pc', function(req, res) {
  if (!req.session.user) {
    return res.status(400).send();
  }
  var fascia = req.body.fascia;
  var position = req.body.position;
  Pc.findOne({
    fascia: fascia,
    position: position
  }, function(err, findedPc) {
    if (err) {
      return res.send({
        success: false,
        extra: err.toString()
      });
    }
    if (findedPc) {
      findedPc.titolo = req.body.titolo;
      findedPc.recensione = req.body.recensione;
      findedPc.immagine = req.body.immagine;
      findedPc.link = req.body.link;
      findedPc.batteria = req.body.batteria;
      findedPc.webcam = req.body.webcam;
      findedPc.monitor = req.body.monitor;
      findedPc.memoria = req.body.memoria;
      findedPc.processore = req.body.processore;
      findedPc.ram = req.body.ram;
      findedPc.schedavideo = req.body.schedavideo;
      findedPc.sistemaoperativo = req.body.sistemaoperativo;
      findedPc.pro = req.body.pro;
      findedPc.contro = req.body.contro;
      findedPc.position = req.body.position;
      findedPc.fascia = req.body.fascia;
      findedPc.save();
      return res.send({
        success: true,
        extra: 'Pc sovrascritto'
      });
    }
    var pc = new Pc();
    pc.titolo = req.body.titolo;
    pc.recensione = req.body.recensione;
    pc.immagine = req.body.immagine;
    pc.link = req.body.link;
    pc.batteria = req.body.batteria;
    pc.webcam = req.body.webcam;
    pc.monitor = req.body.monitor;
    pc.memoria = req.body.memoria;
    pc.processore = req.body.processore;
    pc.ram = req.body.ram;
    pc.schedavideo = req.body.schedavideo;
    pc.sistemaoperativo = req.body.sistemaoperativo;
    pc.pro = req.body.pro;
    pc.contro = req.body.contro;
    pc.position = req.body.position;
    pc.fascia = req.body.fascia;
    pc.save();
    return res.send({
      success: true,
      extra: 'Nuovo pc inserito'
    });
  });

});
//***********************************************************************************************

//*****************************************Tablet********************************************
//get tablet in base alla fascia
router.get('/tablet/:fascia', function(req, res) {
  var fasciaTablet = req.params.fascia;
  var fascia;
  switch (fasciaTablet) {
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
  Tablet.find({
    fascia: fascia
  }, function(err, tablets) {
    if (err) {
      return res.send('Nessun Tablet')
    }
    return res.send(tablets);
  });
});
// post tablet in db
router.post('/tablet', function(req, res) {
  if (!req.session.user) {
    return res.status(400).send();
  }

  var fascia = req.body.fascia;
  var position = req.body.position;
    console.log(fascia);
      console.log(position);
  Tablet.findOne({
    fascia: fascia,
    position: position
  }, function(err, findedTablet) {
    if (err) {
      return res.send({
        success: false,
        extra: err.toString()
      });
    }
    if (findedTablet) {
      findedTablet.titolo = req.body.titolo;
      findedTablet.recensione = req.body.recensione;
      findedTablet.immagine = req.body.immagine;
      findedTablet.link = req.body.link;
      findedTablet.batteria = req.body.batteria;
      findedTablet.fotocamera = req.body.fotocamera;
      findedTablet.display = req.body.display;
      findedTablet.memoria = req.body.memoria;
      findedTablet.processore = req.body.processore;
      findedTablet.ram = req.body.ram;
      findedTablet.rete = req.body.rete;
      findedTablet.so = req.body.so;
      findedTablet.pro = req.body.pro;
      findedTablet.contro = req.body.contro;
      findedTablet.position = req.body.position;
      findedTablet.fascia = req.body.fascia;
      findedTablet.save();
      return res.send({
        success: true,
        extra: 'Tablet sovrascritto'
      });
    }
    var tablet = new Tablet();
    tablet.titolo = req.body.titolo;
    tablet.recensione = req.body.recensione;
    tablet.immagine = req.body.immagine;
    tablet.link = req.body.link;
    tablet.batteria = req.body.batteria;
    tablet.fotocamera = req.body.fotocamera;
    tablet.display = req.body.display;
    tablet.memoria = req.body.memoria;
    tablet.processore = req.body.processore;
    tablet.ram = req.body.ram;
    tablet.rete = req.body.rete;
    tablet.so = req.body.so;
    tablet.pro = req.body.pro;
    tablet.contro = req.body.contro;
    tablet.position = req.body.position;
    tablet.fascia = req.body.fascia;
    tablet.save();
    return res.send({
      success: true,
      extra: 'Nuovo tablet inserito'
    });
  });

});
//***********************************************************************************************

//*****************************************SmartTv********************************************

//get drone in base alla fascia
router.get('/tv/:fascia', function(req, res) {
  var fasciaTv = req.params.fascia;
  var fascia;
  switch (fasciaTv) {
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
  Tv.find({
    fascia: fascia
  }, function(err, tvs) {
    if (err) {
      return res.send('Nessun Drone')
    }
    return res.send(tvs);
  });
});
// post drone in db
router.post('/tv', function(req, res) {
  if (!req.session.user) {
    return res.status(400).send();
  }

  var fascia = req.body.fascia;
  var position = req.body.position;
    console.log(fascia);
      console.log(position);
  Tv.findOne({
    fascia: fascia,
    position: position
  }, function(err, findedTv) {
    if (err) {
      return res.send({
        success: false,
        extra: err.toString()
      });
    }
    if (findedTv) {
      findedTv.titolo = req.body.titolo;
      findedTv.recensione = req.body.recensione;
      findedTv.immagine = req.body.immagine;
      findedTv.link = req.body.link;
      findedTv.peso = req.body.peso;
      findedTv.tecnologia = req.body.tecnologia;
      findedTv.schermo = req.body.schermo;
      findedTv.dimensioni = req.body.dimensioni;
      findedTv.so = req.body.so;
      findedTv.pro = req.body.pro;
      findedTv.contro = req.body.contro;
      findedTv.position = req.body.position;
      findedTv.fascia = req.body.fascia;
      findedTv.save();
      return res.send({
        success: true,
        extra: 'Tv sovrascritto'
      });
    }
    var tv = new Tv();
    tv.titolo = req.body.titolo;
    tv.recensione = req.body.recensione;
    tv.immagine = req.body.immagine;
    tv.link = req.body.link;
    tv.peso = req.body.peso;
    tv.tecnologia = req.body.tecnologia;
    tv.schermo = req.body.schermo;
    tv.dimensioni = req.body.dimensioni;
    tv.so = req.body.so;
    tv.pro = req.body.pro;
    tv.contro = req.body.contro;
    tv.position = req.body.position;
    tv.fascia = req.body.fascia;
    tv.save();
    return res.send({
      success: true,
      extra: 'Nuova Tv inserita'
    });
  });

});
//***********************************************************************************************

//*****************************************Droni********************************************

//get drone in base alla fascia
router.get('/droni/:fascia', function(req, res) {
  var fasciaDroni = req.params.fascia;
  var fascia;
  switch (fasciaDroni) {
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
  Drone.find({
    fascia: fascia
  }, function(err, drones) {
    if (err) {
      return res.send('Nessun Drone')
    }
    return res.send(drones);
  });
});
// post drone in db
router.post('/drone', function(req, res) {
  if (!req.session.user) {
    return res.status(400).send();
  }

  var fascia = req.body.fascia;
  var position = req.body.position;
    console.log(fascia);
      console.log(position);
  Drone.findOne({
    fascia: fascia,
    position: position
  }, function(err, findedDrone) {
    if (err) {
      return res.send({
        success: false,
        extra: err.toString()
      });
    }
    if (findedDrone) {
      findedDrone.titolo = req.body.titolo;
      findedDrone.recensione = req.body.recensione;
      findedDrone.immagine = req.body.immagine;
      findedDrone.link = req.body.link;
      findedDrone.batteria = req.body.batteria;
      findedDrone.autonomia = req.body.autonomia;
      findedDrone.distanza = req.body.distanza;
      findedDrone.controller = req.body.controller;
      findedDrone.dimensione = req.body.dimensione;
      findedDrone.risoluzione = req.body.risoluzione;
      findedDrone.so = req.body.so;
      findedDrone.pro = req.body.pro;
      findedDrone.contro = req.body.contro;
      findedDrone.position = req.body.position;
      findedDrone.fascia = req.body.fascia;
      findedDrone.save();
      return res.send({
        success: true,
        extra: 'Drone sovrascritto'
      });
    }
    var drone = new Drone();
    drone.titolo = req.body.titolo;
    drone.recensione = req.body.recensione;
    drone.immagine = req.body.immagine;
    drone.link = req.body.link;
    drone.batteria = req.body.batteria;
    drone.autonomia = req.body.autonomia;
    drone.distanza = req.body.distanza;
    drone.controller = req.body.controller;
    drone.dimensione = req.body.dimensione;
    drone.risoluzione = req.body.risoluzione;
    drone.so = req.body.so;
    drone.pro = req.body.pro;
    drone.contro = req.body.contro;
    drone.position = req.body.position;
    drone.fascia = req.body.fascia;
    drone.save();
    return res.send({
      success: true,
      extra: 'Nuovo Drone inserito'
    });
  });

});

//**************************************************************************************************

//*****************************************Guide Tech**************************************************
//post anteprima
router.post('/anteprimaGuidaTech', function(req, res) {
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
      extra: 'Nuova anteprima guida tech inserita'
    });
  });
});
//post guidaTech
router.post('/guidaTech', function(req, res) {
  if (!req.session.user) {
    return res.status(400).send();
  }
  var titolo = req.body.titolo;
  GuidaTech.findOne({
    'anteprima.titolo': titolo
  }, function(err, findedGuida) {
    if (err) {
      return res.send({
        success: false,
        extra: err.toString()
      });
    }
    if (findedGuida) {
      findedGuida.guida.titolo = req.body.titolo;
      findedGuida.guida.introduzione = req.body.introduzione;
      findedGuida.guida.prodotti = req.body.prodotti;
      findedGuida.save();
      return res.send({
        success: true,
        extra: 'Nuova guida tech inserita'
      });
    }
  });
});

//get titolo anteprimaTech
router.get('/guideTech/:titolo', function(req, res) {
  var titolo = req.params.titolo;
  GuidaTech.findOne({
    'anteprima.titolo':titolo
  }, function(err, titoloGuidaTech) {
    if (err) {
      return res.send('Nessuna guida ' + titoloGuidaTech)
    }
    return res.send(titoloGuidaTech);
  });
});
//get guidatech
router.get('/home/guideacquistotech/:link', function(req, res) {
  var linkGuida = req.params.link;
  GuidaTech.findOne({'anteprima.link':linkGuida},function(err,guidaTech){
    if(err){
      return res.send('Nessuna guida')
    }
    res.render('guidaT',{
      titoloT:guidaTech.guida.titolo
    });
  });
});
//**************************************************************************************************

//*****************************************Guide Salute**************************************************
//post anteprima
router.post('/anteprimaGuidaSalute', function(req, res) {
  if (!req.session.user) {
    return res.status(400).send();
  }
  var titolo = req.body.titolo;
  GuidaSalute.findOne({
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
    var guidaSalute= new GuidaSalute();
    guidaSalute.anteprima.titolo = req.body.titolo;
    guidaSalute.anteprima.anteprima = req.body.anteprima;
    guidaSalute.anteprima.immagine = req.body.immagine;
    guidaSalute.anteprima.data = req.body.data;
    guidaSalute.anteprima.categoria = req.body.categoria;
    guidaSalute.anteprima.link = req.body.link;
    guidaSalute.save();
    return res.send({
      success: true,
      extra: 'Nuova anteprima guida salute inserita'
    });
  });
});
//post guidaSalute
router.post('/guidaSalute', function(req, res) {
  if (!req.session.user) {
    return res.status(400).send();
  }
  var titolo = req.body.titolo;
  GuidaSalute.findOne({
    'anteprima.titolo': titolo
  }, function(err, findedGuida) {
    if (err) {
      return res.send({
        success: false,
        extra: err.toString()
      });
    }
    if (findedGuida) {
      findedGuida.guida.titolo = req.body.titolo;
      findedGuida.guida.introduzione = req.body.introduzione;
      findedGuida.guida.prodotti = req.body.prodotti;
      findedGuida.save();
      return res.send({
        success: true,
        extra: 'Nuova guida salute inserita'
      });
    }
  });
});

//get titolo anteprimaSalute
router.get('/guideSalute/:titolo', function(req, res) {
  var titolo = req.params.titolo;
  GuidaSalute.findOne({
    'anteprima.titolo':titolo
  }, function(err, titoloGuidaSalute) {
    if (err) {
      return res.send('Nessuna guida ' + titoloGuidaSalute)
    }
    return res.send(titoloGuidaSalute);
  });
});
//get guidaSalute
router.get('/home/guideacquistosalute/:link', function(req, res) {
  var linkGuida = req.params.link;
  GuidaSalute.findOne({'anteprima.link':linkGuida},function(err,guidaSalute){
    if(err){
      return res.send('Nessuna guida')
    }
    res.render('guidaS',{
      titoloS:guidaSalute.guida.titolo
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
