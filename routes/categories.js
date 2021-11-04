const { Router } = require('express');
const categoriesRouter = Router();
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

categoriesRouter.put(
  '/:id',
  isOwnedMember,
  isAdmin,
  categoriesController.update
);

categoriesRouter.delete(
  '/:id',
  verifyToken,
  isAdmin,
  categoriesController.remove
);

module.exports = categoriesRouter;
