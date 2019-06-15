var express = require("express");
var router = express.Router();
var cors = require("cors");
var db = require("diskdb");
var path = require("path");
var _ = require("lodash");

/* POST employee */
router.post("/create-employee", cors(), function(req, res, next) {
  db = db.connect(path.join(__dirname, "../json"), ["employees"]);
  db.employees.save(req.body);
  res.status(200).send({ status: 200, message: "Created success" });
  res
    .status(401)
    .send({ status: 401, message: "internal error", type: "internal" });
});

module.exports = router;
