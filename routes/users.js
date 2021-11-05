var express = require('express');
var router = express.Router();
const usersController = require('../controllers/users');
const authMiddleware = require('../middlewares/auths');
const usersValidation = require('../middlewares/userValidation');

router.get('/', authMiddleware.isAdmin, usersController.getAll);
router.put('/:id', usersValidation , usersController.update);


module.exports = router;