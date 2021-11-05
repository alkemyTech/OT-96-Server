const { Router } = require('express');
const newsRouter = Router();
const newsController = require('../controllers/news');
const { isAdmin } = require('../middlewares/auths');
const newsDataValidation = require('../middlewares/newsDataValidation');

newsRouter.get('/:id',[isAdmin], newsController.getById);
newsRouter.post('/', isAdmin, newsDataValidation, newsController.create);
newsRouter.put('/:id', isAdmin, newsController.update);
newsRouter.delete('/:id', [isAdmin], newsController.remove);

module.exports = newsRouter;
