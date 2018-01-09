'use strict';

var id = 0;
var mongoose = require('mongoose'),
Task = mongoose.model('Tasks');
var querystring = require('querystring');
var http = require('http');
var monero_wallet = require('../../lib/monero_utils/monero_wallet_utils');
var env = "production";
var isdebug = false;

exports.create_wallet = function(req, res){
	// Create a new Monero wallet based on Mymonero code
	// It returns the seed, mnemonic, private and public view
	// keys, private and public spend keys and  finally the
	// Monero Public Address
	let monero_wallet_generated = monero_wallet.NewlyCreatedWallet();
	// If monero_wallet_generated is undefined, then internal error
	if ( monero_wallet_generated == undefined){
		res.send("Internal error",500);
		//Log error
		console.log("An error occured during wallet generation");
	}else{
		let body_monero_wallet = {'privatekey' :monero_wallet_generated.seed, public_address:monero_wallet_generated.keys.public_addr};
		res.send(JSON.stringify(body_monero_wallet),200,{"Content-Type": "application/json"});
		console.log("User [IP user: "+req.ip+"] asked for a new wallet: "+JSON.stringify(body_monero_wallet));
	}
};

exports.sign_txid = function(req, res){
	// Function for signing tx_id with private key
};

exports.is_alive = function(req, res){
	let response = {'name': 'Monero sign service', 'version' : '0.2', 'env' : env, 'Isdebug': isdebug}
	res.send(JSON.stringify(response),200,{"Content-type":"application/json"});
};
