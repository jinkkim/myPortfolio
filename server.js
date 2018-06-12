var express = require("express");
var app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(process.cwd() + '/public'));


//set handlebars as the view engine
var handlebars = require("express-handlebars");
app.engine("handlebars", handlebars({
    extname: "handlebars",
    defaultLayout: "main",
    layoutsDir: __dirname + "/views/layout/",
    partialsDir: __dirname + "/views/partial/"
}));
app.set("view engine", "handlebars");

//index.html --> index.handlebars
app.get("/", function(req, res){
    res.render("portfolio");
});

//about.html --> about.handlebars
app.get("/about", function(req, res){
    res.render("about");
});

//portfolio.html --> portfolio.handlebars
app.get("/portfolio", function(req, res){
    res.render("portfolio");
});

//contact.html --> contact.handlebars
app.get("/contact", function(req, res){
    res.render("contact");
});




var PORT = process.env.PORT || 3000;
app.listen(PORT, function(){
    console.log("listening on " + PORT);
});