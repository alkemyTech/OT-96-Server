const express = require('express');
const categoriesRouter = express.Router();
const authMiddleware = require('../middlewares/auths');
const categoriesController = require('../controllers/categories');
const {
  validateCategoryDetails,
} = require('../middlewares/validateCategoryDetails');

categoriesRouter.post(
  '/',
  isAdmin,
  validateCategoryDetails,
  categoriesController.create
);

categoriesRouter.get(
  '/',
  authMiddleware.isAdmin,
  categoriesController.getAllNames
);
categoriesRouter.get(
  '/:id',
  authMiddleware.isOwnedMember,
  authMiddleware.isAdmin,
  categoriesController.getById
);

categoriesRouter.put(
  '/:id',
  authMiddleware.isOwnedMember,
  authMiddleware.isAdmin,
  categoriesController.update
);

categoriesRouter.delete(
  '/:id',
  authMiddleware.isOwnedMember,
  authMiddleware.isAdmin,
  categoriesController.remove
);

module.exports = categoriesRouter;
