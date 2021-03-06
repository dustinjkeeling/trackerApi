var express = require("express");
var bodyParser = require("body-parser");
var dbConfig = require("./config/database.config.js");
var mongoose = require("mongoose");

// create express app
var app = express();

app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

mongoose.connect(dbConfig.url, {
  useMongoClient: true
});

mongoose.connection.on("error", function() {
  console.log("Could not connect to the database.");
  process.exit();
});

mongoose.connection.once("open", function() {
  console.log("Successfully connected to the database");
});
require("./routes/location.routes.js")(app);

// define a simple route
app.get("/", function(req, res) {
  res.json({
    message: "Particle device GPS Location API"
  });
});

// listen for requests
app.listen(3000, function() {
  console.log("Server is listening on port 3000");
});
