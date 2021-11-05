const express = require('express');
const categoriesRouter  = express.Router();
const authMiddleware = require('../middlewares/auths');
const categoriesController = require('../controllers/categories');
const {
  validateCategoryDetails,
} = require('../middlewares/validateCategoryDetails');
const { isAdmin, isOwnedMember, verifyToken } = require('../middlewares/auths');

categoriesRouter.post(
  '/',
  isAdmin,
  validateCategoryDetails,
  categoriesController.create
);

categoriesRouter.get('/', [authMiddlewares.isAdmin], categoriesController.getAll);
categoriesRouter.get('/:id',authMiddleware.isOwnedMember, authMiddleware.isAdmin ,categoriesController.getById);

categoriesRouter.put(
  '/:id',
  authMiddleware.isOwnedMember,
  authMiddleware.isAdmin,
  categoriesController.update
);

categoriesRouter.delete(
  '/:id',
  verifyToken,
  isAdmin,
  categoriesController.remove
);

module.exports = categoriesRouter
