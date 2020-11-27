// Set up MySQL connection.
var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "sagar8856",
  database: "burgers_db",
});

connection.connect(function (err) {
  err ? console.error("Error in connecting: " + err) : console.log("Connected to database.");
});

module.exports = connection;
