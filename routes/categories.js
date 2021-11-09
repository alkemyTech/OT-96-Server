const express = require('express');
const categoriesRouter = express.Router();
const authMiddleware = require('../middlewares/auths');
const categoriesController = require('../controllers/categories');

const validateCategory = require('../middlewares/categories');

categoriesRouter.post(
  '/',
  authMiddleware.isAdmin,
  validateCategory,
  categoriesController.create
);

categoriesRouter.get(
  '/',
  authMiddleware.isAdmin,
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
