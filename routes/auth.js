const { Router } = require('express');
const authRouter = Router();
const authController = require('../controllers/authControllers')

authRouter.post('/login', authController.loginUser)

module.exports = authRouter;
