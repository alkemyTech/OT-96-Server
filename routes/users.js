const { Router } = require('express');
const userRouter = Router();
const userController = require('../controllers/users')
const usersValidation = require('../middlewares/userValidation');


userRouter.put('/:id',usersValidation ,userController.update);


module.exports = userRouter;

