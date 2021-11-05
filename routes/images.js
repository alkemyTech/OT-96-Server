const { Router } = require('express');
const imageRouter = Router();
const imagesController = require('../controllers/images');

imageRouter.post('/', imagesController.create);

module.exports = imageRouter;
