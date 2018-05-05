var express = require("express");
var bodyParser = require("body-parser");
var app = express();

var config = require("./config");


app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.use(express.static("client"));

const routes = require('./routs/api/routes')(app)

module.exports.start = () =>
  app.listen(config.port, () =>
    console.log("App listening on port " + config.port)
  );
