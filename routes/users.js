var express = require('express');
var router = express.Router();
const usersController = require('../controllers/users');
const authMiddleware = require('../middlewares/auths');
/* GET users listing. */
router.get('/',authMiddleware.isAdmin ,usersController.getAll);

module.exports = router;
