// COPYRIGHT 2017
// SerHack
// See LICENSE for more information

'use strict';
module.exports = function(app) {
  var monero_integrations = require('../controllers/monerointegrations');

  app.route('/api/wallet')
   .get(monero_integrations.create_wallet);
	
  app.route('/api/sign')
   .post(monero_integrations.sign_txid);
};
