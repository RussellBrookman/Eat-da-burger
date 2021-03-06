var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var path = require('path')
var PORT = process.env.PORT ||4500;
var app = express();

app.use(express.static(path.join(__dirname + "views")));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride("_method"));
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
var routes = require("./controllers/burgers_controller.js");
app.use("/", routes);
app.use("/update", routes);
app.use("/create", routes);
app.listen(PORT, function() {
  console.log("Listening on port:%s", PORT);
});