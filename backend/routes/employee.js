var express = require("express");
var router = express.Router();
var cors = require("cors");
var db = require("diskdb");
var path = require("path");
var _ = require("lodash");

var employeesJson = require("../json/employees.json");
/* POST employee */
router.post("/create-employee", cors(), function(req, res, next) {
  db = db.connect(path.join(__dirname, "../json"), ["employees"]);
  db.employees.save(req.body);
  res.status(200).send({ status: 200, message: "Created success" });
  res
    .status(401)
    .send({ status: 401, message: "internal error", type: "internal" });
});

// Get employees
router.get("/list-employee", cors(), function(req, res, next) {
  res.send(employeesJson);
});

// Get employee
router.get("/view-employee/:empId", cors(), function(req, res) {
  var empId = req.params.empId;
  db = db.connect(path.join(__dirname, "../json"), ["employees"]);
  var optinData = db.employees.findOne({ employeeId: empId });
  res.send(optinData);
});

// Update an employee
router.put("/update-employee/:empId", cors(), function(req, res, next) {
  db = db.connect(path.join(__dirname, "../json"), ["employees"]);

  var query = {
    employeeId: req.params.empId
  };
  var options = {
    multi: false,
    upsert: false
  };

  var updated = db.employees.update(query, req.body, options);
  res.send({ message: "Employee successfully updated" });
});

// Delete an emplyee
router.delete("/delete-employee/:empId", cors(), function(req, res, next) {
  db = db.connect(path.join(__dirname, "../json"), ["employees"]);
  db.employees.remove({ employeeId: req.params.empId }, true);
  res.send({ message: "Employee removed" });
});
module.exports = router;
