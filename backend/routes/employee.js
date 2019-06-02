var express = require("express");
var router = express.Router();

/* POST employee */
router.post("/create-employee", function(req, res, next) {
  console.log("backend --- ", req.body);
});

module.exports = router;
