const { Router } = require('express');
const categoriesRouter = Router();
const categoriesController = require('../controllers/categories');
const authsMiddlewares = require('../middlewares/auths');

categoriesRouter.get('/', [authsMiddlewares.isAdmin], categoriesController.getAll);

module.exports = categoriesRouter;