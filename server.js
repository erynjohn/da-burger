var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override")

var PORT = process.env.PORT || 8000;
var app = express();

var exphbs = require("express-handlebars");

app.use(bodyParser.urlencoded({extended: true}));
app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

//https://github.com/expressjs/method-override
//override using a query value
// override with POST having ?_method=DELETE
app.use(methodOverride('_method'));

//require routes
var routes = require('./controllers/burgers_controller.js');

app.use("/", routes);


app.listen(PORT);
console.log("Listen on http://localhost:"+PORT);
