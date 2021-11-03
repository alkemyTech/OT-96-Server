var express = require('express');
var router = express.Router();

const authsMiddleware = require('../middlewares/auths');
const categoriesController = require('../controllers/categories');

router.delete(
  '/:id',
  authsMiddleware.verifyToken,
  authsMiddleware.isAdmin,
  categoriesController.remove
);

module.exports = router;
