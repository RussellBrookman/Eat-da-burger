var express = require('express');
var burger = ('./burger.js');

var orm = {
	selectAll: function(order, price, quanity) {
		var stringQuery = "SELECT * FROM ?? WHERE ?? = ?";
		connection.query(stringQuery, [order, price, quanity], function(err, res) {
			if(err) throw err;
			console.log(res);
		});
	},
	insertOne: function(order, price, quanity) {
		var stringQuery = "SELECT ?? FROM ?? ORDER BY ?? DESC";
		console.log(stringQuery);
		connection.query(stringQuery, [order, price, quanity], function(err, res) {
			if(err) throw err;
			console.log(res);
		});
	},
	update({
		updateOne: 'Place an order'
//	I don't need =>. It's for returning a promise. 
	}).then(() => ).catch(err => throw err);
}


module.exports = orm;