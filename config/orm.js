var connection = require('./connection.js');

// ORM - Object Relational Mapper

orm.selectAll("*", "burgers");

orm.insertOne("*", "order");

orm.updateOne("*", "order");

// some code to work from incase the code above, which I don't understand, doesn't work.
/*var orm = {*/   // The last variable cb represents the anonymous function being passed from server.js   selectWhere: function(tableInput, colToSearch, valOfCol, cb) {     var queryString = "SELECT * FROM ?? WHERE ?? = ?";     connection.query(queryString, [tableInput, colToSearch, valOfCol], function(err, result) {       cb(result);     });   } }; module.exports = orm;
module.exports = orm;
