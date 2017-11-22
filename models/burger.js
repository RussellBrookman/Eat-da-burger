var orm = require("../config/orm.js");

var burger = {
  all: function(cb) {
    orm.all("burgers", function(res) {
      cb(res);
    });
  },
  create: function(name, cb) {
    orm.create("burgers", [
      "burger_name", "price", "quantity", "ts"
    ], [
      name, price, quantity, ts
    ], cb);
  },
  update: function(id, cb) {
    var condition = "id=" + id;
    orm.update("burgers", {
      // need to come back to this
      name: name,
      price: price,
      quanity: quantity,
      ts: ts
    }, condition, cb);
  }
};

module.exports = burger;

