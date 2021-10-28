const { Router } = require('express');
const userRouter = Router();
const usersController = require('../controllers/users')

/* GET users listing. */
userRouter.get('/', usersController.getAllUser);
userRouter.get('/:id', usersController.getUser);
userRouter.post('/', usersController.createUser);
userRouter.put('/:id', usersController.updateUser);
userRouter.delete('/:id', usersController.deleteUser);

module.exports = userRouter;
