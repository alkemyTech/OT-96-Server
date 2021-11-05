const { Router } = require('express');
const slideRouter = Router();
const slideController = require('../controllers/slide.js');
const authMiddleware = require('../middlewares/auths');

slideRouter.get('/', authMiddleware.isAdmin, slideController.getAll);

slideRouter.get('/:id', authMiddleware.isAdmin, slideController.getById);

slideRouter.post('/', authMiddleware.isAdmin, slideController.create);

slideRouter.put('/:id', authMiddleware.isAdmin, slideController.update);

slideRouter.delete('/:id', authMiddleware.isAdmin, slideController.remove);

module.exports = slideRouter;
