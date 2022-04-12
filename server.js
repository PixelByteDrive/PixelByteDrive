var express = require("express");
var online = process.env.online;
var app = express();
app.use(express.static(__dirname));
if (online == "true") {
  app.get("", function (request, response) {
    response.sendFile(__dirname + "/homepage.html");
  });
} else if (online == "update") {
  app.get("", function (request, response) {
    response.sendFile(__dirname + "/error/updating.html");
  });
} else {
  app.get("", function (request, response) {
    response.sendFile(__dirname + "/error/maintenance.html");
  });
}
app.use((req, res) => {
  res.status(404).sendFile(__dirname + "/error/404.html");
});
app.use((req, res) => {
  res.status(414).sendFile(__dirname + "/error/404.html");
});
app.use((req, res) => {
  res.status(403).sendFile(__dirname + "/error/403.html");
});
app.use((req, res) => {
  res.status(503).sendFile(__dirname + "/error/maintenance.html");
});
app.listen(8080);