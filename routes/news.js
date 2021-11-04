const { Router } = require('express');
const newsRouter = Router();
const newsController = require('../controllers/news');
const authsMiddlewares = require('../middlewares/auths');
const { newsDataValidation } = require('../middlewares/newsDataValidation');

newsRouter.get('/:id',[authsMiddlewares.isAdmin], newsController.getById);
newsRouter.put('/', newsDataValidation, newsController.create);
newsRouter.put("/:id", newsController.update);

module.exports = newsRouter;
