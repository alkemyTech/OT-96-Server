const { Router } = require('express');
const categoriesRouter = Router();
const categoriesController = require('../controllers/categories')

categoriesRouter.post('/', categoriesController.create);

module.exports = categoriesRouter;