const express = require('express');
const categoriesRouter  = express.Router();
const authMiddleware = require('../middlewares/auths');
const categoriesController = require('../controllers/categories');

categoriesRouter.get('/:id',authMiddleware.isOwnedMember, authMiddleware.isAdmin ,categoriesController.getById);

categoriesRouter.put(
  '/:id',
  authMiddleware.isOwnedMember,
  authMiddleware.isAdmin,
  categoriesController.update
);

module.exports = categoriesRouter
