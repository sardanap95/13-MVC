// Set up MySQL connection. mysql://befcc3a42849a1:ab941443@us-cdbr-east-02.cleardb.com/heroku_e4ee0bd8b9aa420?reconnect=true
//heroku addons: create cleardb: ignite--fork = mysql://root:sagar8856@localhost/burger_db
var mysql = require("mysql");

var connection;

function connectToDB() {
  connection = mysql.createConnection({
    host: "us-cdbr-east-02.cleardb.com",
    port: 3306,
    user: "befcc3a42849a1",
    password: "ab941443",
    database: "heroku_e4ee0bd8b9aa420",
  });
  connection.connect(function (err) {
    if (err) {
      console.log("Failed to connect to database at " + new Date() + "\n" + err);
      setTimeout(connectToDB, 10000);
    } else {
      console.log("Connected to database at " + new Date());
    }
  });

  connection.on("error", function onError(err) {
    console.log("db error", err);
    if (err) {
      console.log("Reconnecting to DB at " + new Date() + "\n" + err);
      connectToDB();
    } else {
      console.log("Failed to connect, please check logs.\n" + new Date() + "\n" + err);
    }
  });
}

connectToDB();

module.exports = connection;
