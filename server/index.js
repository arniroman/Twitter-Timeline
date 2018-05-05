var express = require("express");
var bodyParser = require("body-parser");
const path = require("path")
var app = express();

var config = require("./config");

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.use(express.static('client'));

const routes = require("./routs/api/routes")(app);


// app.all("/*", (request, response) => {
//   response.sendFile(path.resolve(__dirname, "../client", "index.html"));
// });
module.exports = app;

module.exports.start = () =>
  app.listen(config.port, () =>
    console.log("App listening on port " + config.port)
  );
