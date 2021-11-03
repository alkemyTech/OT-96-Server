const express = require('express');
const categoriesRouter  = express.Router();
const authMiddleware = require('../middlewares/auths');
const categoriesController = require('../controllers/categories');

categoriesRouter.get('/:id',authMiddleware.verifyToken ,categoriesController.getById);

module.exports = categoriesRouter