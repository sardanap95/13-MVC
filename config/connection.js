// Set up MySQL connection. mysql://befcc3a42849a1:ab941443@us-cdbr-east-02.cleardb.com/heroku_e4ee0bd8b9aa420?reconnect=true
//heroku addons: create cleardb: ignite--fork = mysql://root:sagar8856@localhost/burger_db
var mysql = require("mysql");

var connection;

var connection = mysql.createConnection({
  host: "us-cdbr-east-02.cleardb.com",
  port: 3306,
  user: "befcc3a42849a1",
  password: "ab941443",
  database: "heroku_e4ee0bd8b9aa420",
});

connectToDB = async () => {
  connection.connect(function (err) {
    err ? connectToDB() : console.log("Connected to database.");
  });
};

await connectToDB();

module.exports = connection;
