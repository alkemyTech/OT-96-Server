const { Router } = require('express');
const userRouter = Router();
const userController = require('../controllers/userControllers')

/* GET users listing. */
userRouter.get('/', userController.getAllUser);
userRouter.get('/:id', userController.getUser);
userRouter.post('/', userController.createUser);
userRouter.put('/:id', userController.updateUser);
userRouter.delete('/:id', userController.deleteUser);

module.exports = userRouter;
