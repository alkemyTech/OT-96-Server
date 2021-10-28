var express = require('express');
var router = express.Router();
const db = require("../models");
const Member = db.members;


/* GET Member listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;