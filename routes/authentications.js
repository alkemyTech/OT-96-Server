const { Router } = require('express');
const authRouter = Router();
const authenticationsController = require('../controllers/authentications')
const validateLoginDetails = require('../middlewares/validateLoginDetails')

authRouter.post('/login', validateLoginDetails, authenticationsController.login)

module.exports = authRouter;
