var express = require('express'),
  app = express(),
  port = process.env.PORT || 4000;
  Task = require('./api/models/monero-integrations-model'),
  bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var version = 0.1;
var routes = require('./api/routes/moneroroute'); 
routes(app); 
app.listen(port);
console.log('Monero Integrations v.' + version + ' by SerHack');
console.log('Monero Integrations RESTful API server started on: ' + port);
