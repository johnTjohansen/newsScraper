// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

var Comment = require("./models/comment.js");
var Article = require("./models/article.js");

var request = require("request");

mongoose.Promise = Promise;

var app = express();

app.use(logger("dev"));
app.use(bodyParser.urlencoded({
	extended: false
}));

app.use(express.static("public"));

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

mongoose.connect()
var db = mongoose.connection;

db.on("error", function(error) {
  console.log("Mongoose Error: ", error);
});

// Once logged in to the db through mongoose, log a success message
db.once("open", function() {
  console.log("Mongoose connection successful.");
});

var routes = require("./controllers/newsController.js");
app.use("/", routes);

// Listen on port 3000
app.listen(3000, function() {
  console.log("App running on port 3000!");
});

