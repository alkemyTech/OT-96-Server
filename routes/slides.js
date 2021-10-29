const { Router } = require('express');
const slideRouter = Router();
const slideController = require('../controllers/slide.js')
const { isAdmin } = require('../middlewares/auths')

slideRouter.get('/', isAdmin ,slideController.getAll);
slideRouter.get('/:id', isAdmin,slideController.getById);
slideRouter.post('/',isAdmin, slideController.create);
slideRouter.put('/:id',isAdmin, slideController.update);
slideRouter.delete('/:id', isAdmin,slideController.remove);

module.exports = slideRouter;