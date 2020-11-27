var express = require("express");
var router = express.Router();
var burger = require("../models/burger");

router.get("/", (req, res) => {
  burger.selectAll((data) => {
    console.log(data.length, "burgers fetched.");
    res.render("index", {
      burger: data,
    });
  });
});

router.post("/api/burger", ({ body }, res) => {
  burger.insertOne("burger_name", body.burger_name, (result) => {
    console.log(result.affectedRows, " burger inserted successfully.");
    res.json({ id: result.insertId });
  });
});

router.put("/api/burger/:id", (req, res) => {
  var burgerId = req.params.id;
  burger.updateOne(burgerId, ({ changedRows }) => {
    changedRows === 0 ? res.status(404).end() : res.status(200).end();
  });
});

module.exports = router;
