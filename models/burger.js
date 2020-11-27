var orm = require("../config/orm");

module.exports = {
  selectAll: function (cb) {
    orm.selectAll("burger", (res, err) => {
      err ? console.log(err) : cb(res);
    });
  },
  insertOne: (column, value, cb) => {
    orm.insertOne("burger", column, value, (res, err) => {
      err ? console.log(err) : cb(res);
    });
  },
  updateOne: function (burgerId, cb) {
    orm.updateOne("burger", "devoured", burgerId, (res, err) => {
      err ? console.log(err) : cb(res);
    });
  },
};
