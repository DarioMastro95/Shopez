const express = require('express');
const app = express();
const port = process.env.PORT||3000;
const bodyParser = require('body-parser');
const SitemapGenerator = require('sitemap-generator');
var routes = require('./routes/routes.js');
var session = require('express-session');
var Smartphone = require('./mongoSchemi/Smartphone');
var User = require('./mongoSchemi/User');
var compression = require('compression');
var secure = require('express-force-https');
app.use(express.static(__dirname + '/public'));
app.use(secure);
app.use(bodyParser.json());
app.use(compression());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({ secret: 'jskdjsdksjdksjdkksdj', resave: false, saveUninitilized: true }));
app.use('/', routes);
app.set('view engine', 'ejs');
// create generator
const generator = SitemapGenerator('https://www.shopezhub.com/', {
  stripQuerystring: false
});

// register event listeners
generator.on('done', () => {
  // sitemaps created
});
app.listen(port, function () {
  console.log(port);
  generator.start();
});
