const { Router } = require('express');
const authRouter = Router();
const authenticationsController = require('../controllers/authentications')

authRouter.post('/login', authenticationsController.loginUser)

module.exports = authRouter;
