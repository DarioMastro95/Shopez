const express = require('express');
const app = express();
const port = process.env.PORT||3000;
const bodyParser = require('body-parser');

var routes = require('./routes/routes.js');
var session = require('express-session');
var Smartphone = require('./mongoSchemi/Smartphone');
var User = require('./mongoSchemi/User');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({ secret: 'jskdjsdksjdksjdkksdj', resave: false, saveUninitilized: true }));
app.use('/', routes);
app.set('view engine', 'ejs');
app.listen(port, function () {
  console.log(port);
});
