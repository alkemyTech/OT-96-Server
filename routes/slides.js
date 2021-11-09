const express = require('express');
const slidesRouter = express.Router();
const slideController = require('../controllers/slides');
const authMiddleware = require('../middlewares/auths');

slidesRouter.get('/', authMiddleware.isAdmin, slideController.getAll);

slidesRouter.get('/:id', authMiddleware.isAdmin, slideController.getById);

slidesRouter.post('/', authMiddleware.isAdmin, slideController.create);

slidesRouter.put('/:id', authMiddleware.isAdmin, slideController.update);

slidesRouter.delete('/:id', authMiddleware.isAdmin, slideController.remove);

module.exports = slidesRouter;
