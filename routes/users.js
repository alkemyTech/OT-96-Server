var express = require('express');
var router = express.Router();
const usersController = require('../controllers/users.js');
const usersValidation = require('../middlewares/userValidation');

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.post('/auth/register', usersValidation, usersController.create);

module.exports = router;
