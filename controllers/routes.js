var express = require("express");
var burger = require("../models/burger.js");
var router = express.Router();

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  burger.all(function(data) {
    res.render("index", {data});
  });
});

router.post("/burgers/create", function(req, res) {
  burger.create(req.body.name, function(result) {
    res.redirect("/");
  });
});

router.put("/burgers/update", function(req, res) {
  burger.update(req.body.id, function(result) {
    res.redirect("/");
  });
});

// Export routes for server.js to use.
module.exports = router;
