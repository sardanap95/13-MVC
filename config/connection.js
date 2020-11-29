// Set up MySQL connection. mysql://befcc3a42849a1:ab941443@us-cdbr-east-02.cleardb.com/heroku_e4ee0bd8b9aa420?reconnect=true
//heroku addons: create cleardb: ignite--fork = mysql://root:sagar8856@localhost/burger_db
var mysql = require("mysql");
var db_config = {
  host: "us-cdbr-east-02.cleardb.com",
  port: 3306,
  user: "befcc3a42849a1",
  password: "ab941443",
  database: "heroku_e4ee0bd8b9aa420",
};

var connection;

function handleDisconnect() {
  connection = mysql.createConnection(db_config); // Recreate the connection, since
  // the old one cannot be reused.

  connection.connect(function (err) {
    // The server is either down
    if (err) {
      // or restarting (takes a while sometimes).
      console.log("error when connecting to db:", err);
      setTimeout(handleDisconnect, 2000); // We introduce a delay before attempting to reconnect,
    } // to avoid a hot loop, and to allow our node script to
  }); // process asynchronous requests in the meantime.
  // If you're also serving http, display a 503 error.
  connection.on("error", function (err) {
    console.log("db error", err);
    if (err.code === "PROTOCOL_CONNECTION_LOST") {
      // Connection to the MySQL server is usually
      handleDisconnect(); // lost due to either server restart, or a
    } else {
      // connnection idle timeout (the wait_timeout
      throw err; // server variable configures this)
    }
  });
}

handleDisconnect();

module.exports = connection;
