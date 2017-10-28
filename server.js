var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var mysql = require('mysql');

var connection = mysql.createConnection({
	host: "localhost",
	port: 3500,
	user: "root",
	password: "ABC123",
	database: "burgers_db"
});

connection.connect(function(err) {
	if (err) throw err;
	console.log("connected as id " + connection.threadId);
	afterConnect();
});

function afterConnect() {
	connection.query("SELECT * FROM burgers", function(err, res) {
		if (err) throw err;
		console.log(res);
		connection.end();
	})
}