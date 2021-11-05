const express = require('express');
const categoriesRouter  = express.Router();
const authMiddleware = require('../middlewares/auths');
const categoriesController = require('../controllers/categories');
const {
  validateCategoryDetails,
} = require('../middlewares/validateCategoryDetails');
const { isAdmin, isOwnedMember } = require('../middlewares/auths');

categoriesRouter.post(
  '/',
  isAdmin,
  validateCategoryDetails,
  categoriesController.create
);

categoriesRouter.get('/:id',authMiddleware.isOwnedMember, authMiddleware.isAdmin ,categoriesController.getById);

categoriesRouter.put(
  '/:id',
  authMiddleware.isOwnedMember,
  authMiddleware.isAdmin,
  categoriesController.update
);


module.exports = categoriesRouter
