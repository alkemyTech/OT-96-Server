const express = require('express');
const categoriesRouter = express.Router();
const authMiddleware = require('../middlewares/auths');
const paginationMiddleware = require('../middlewares/pagination');
const categoriesController = require('../controllers/categories');

const categoriesMiddleware = require('../middlewares/categories');

categoriesRouter.post(
  '/',
  authMiddleware.isAdmin,
  categoriesMiddleware.validateCategory,
  categoriesController.create
);

categoriesRouter.get(
  '/',
  authMiddleware.isAdmin,
  paginationMiddleware.validate,
  paginationMiddleware.parseCategories,
  categoriesController.getAllNames
);
categoriesRouter.get(
  '/:id',
  authMiddleware.isAdmin,
  categoriesController.getById
);

categoriesRouter.put(
  '/:id',
  authMiddleware.isAdmin,
  categoriesController.update
);

categoriesRouter.delete(
  '/:id',
  authMiddleware.isAdmin,
  categoriesController.remove
);

module.exports = categoriesRouter;
