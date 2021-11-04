const express = require('express');
const categoriesRouter  = express.Router();
const authMiddleware = require('../middlewares/auths');
const categoriesController = require('../controllers/categories');

categoriesRouter.get('/:id',authMiddleware.isOwnedMember, authMiddleware.isAdmin ,categoriesController.getById);

module.exports = categoriesRouter