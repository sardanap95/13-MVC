const connection = require("./connection");

module.exports = {
  selectAll: (table, cb) => {
    connection.query(`SELECT * FROM ${table};`, (err, res) => {
      err ? console.log(err) : cb(res);
    });
  },
  insertOne: (table, column, value, cb) => {
    connection.query(`INSERT INTO ${table} (${column}) VALUES ("${value}")`, (err, res) => {
      err ? console.log(err) : cb(res);
    });
  },
  updateOne: (table, column, burger_id, cb) => {
    connection.query(`UPDATE ${table} SET ${column} = 1 WHERE id=${burger_id}`, (err, res) => {
      err ? console.log(err) : cb(res);
    });
  },
};
