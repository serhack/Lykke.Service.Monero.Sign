// COPYRIGHT 2017
// SerHack
// See LICENSE for more information

'use strict';

var http = require('http');
var monero_wallet = require('../../lib/monero_utils/monero_wallet_utils');


exports.create_wallet = function(req, res){
	// Create a new Monero wallet based on Mymonero code
	// It returns the seed, mnemonic, private and public view
	// keys, private and public spend keys and  finally the
	// Monero Public Address
	let monero_wallet_generated = monero_wallet.NewlyCreatedWallet();
	// If monero_wallet_generated is undefined, then internal error
	if ( monero_wallet_generated == undefined){
		res.send("Internal error", 500);
		//Log error
		console.log("An error occured during wallet generation");
	}else{
		let body_monero_wallet = {'seed' :monero_wallet_generated.seed, public_address:monero_wallet_generated.keys.public_addr};
		res.send(JSON.stringify(body_monero_wallet),200,{"Content-Type": "application/json"});
		console.log("User [IP user: "+req.ip+" ] asked for a new wallet: "+JSON.stringify(body_monero_wallet));
	}
};

exports.sign_txid = function(req, res){
	// Function in order to sign tx_id with private key
	// Take private key and then decode the public address
};
