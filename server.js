var express = require("express");
var routes = require("./controllers/burgers_controller");
var hbs = require("express-handlebars");
var app = express();

const port = process.env.PORT || 9090;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/public", express.static("./public"));
app.engine("handlebars", hbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(routes);

app.listen(port, function () {
  console.log("Server listening on http://localhost:" + port);
});
