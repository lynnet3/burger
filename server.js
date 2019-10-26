var express = require("express");
var exhbs = require("express-handlebars");
var bodyParser = require("body-parser")
var PORT = process.env.PORT || 8080;

var app = express();

app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


app.engine("handlebars", exhbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

var routes = require("./controllers/burger_contoller.js");

app.use(routes);

app.listen(PORT, function(){
    console.log("Ready to go on http://localhost:" + PORT);
})