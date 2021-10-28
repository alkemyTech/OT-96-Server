const { Router } = require('express');
const userRouter = Router();
const usersController = require('../controllers/users')

/* GET users listing. */
userRouter.get('/', usersController.getAll);
userRouter.get('/:id', usersController.getOne);
userRouter.post('/', usersController.create);
userRouter.put('/:id', usersController.update);
userRouter.delete('/:id', usersController.remove);

module.exports = userRouter;
