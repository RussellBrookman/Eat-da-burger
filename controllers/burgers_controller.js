var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');

/*var orm = {
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

module.exports = orm;*/

router.get("/", function(req, res) {
  res.redirect("/burgers");
});

router.get("/burgers", function(req, res) {
  // express callback response
  burger.all(function(burgerData) {
    // for orm.js, MySQL query callback, render with handlebars
    res.render("index", { burger_data: burgerData });
  });
});

// post route -> back to index
// the request object will be input for buger.addBurger
router.post("/burgers/create", function(req, res) {
	burger.create(req.body.burger_name, function(result) {
    console.log(result);
    res.redirect("/");
  });
});

// put route -> back to index
// orm.js will use MySQL callback to return the log to the console,
router.put("/burgers/update", function(req, res) {
  burger.update(req.body.burger_id, function(result) {
    console.log(result);
    res.redirect("/");
  });
});

module.exports = router;