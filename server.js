var express = require("express");
var bodyParser = require("body-parser");

var PORT = process.env.PORT || 8000;
var app = express();

var exphbs = require("express-handlebars");

app.use(bodyParser.urlencoded({extended: true}));
app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");
app.use(express.static('public'));

//require routes
var routes = require('./controllers/burgers_controller.js');

app.use("/", routes);


app.listen(PORT);
// eslint-disable-next-line no-console
console.log("Listen on http://localhost:"+PORT);
