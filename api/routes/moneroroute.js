'use strict';
module.exports = function(app) {
  var monero_integrations = require('../controllers/monerointegrations');

  app.route('/api/wallet')
   .get(monero_integrations.create_wallet);
	
  app.route('/api/sign')
   .post(monero_integrations.sign_txid);
 
  app.route('/api/isalive')
   .get(monero_integrations.is_alive);
};
