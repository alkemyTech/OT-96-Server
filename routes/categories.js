const { Router } = require('express');
const categoriesRouter = Router();
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

categoriesRouter.put(
  '/:id',
  isOwnedMember,
  isAdmin,
  categoriesController.update
);

module.exports = categoriesRouter;
