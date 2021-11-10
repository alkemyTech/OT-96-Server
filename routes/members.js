const express = require('express');
const membersRouter = express.Router();
const membersControllers = require('../controllers/members');
const authMiddleware = require('../middlewares/auths');

membersRouter.get(
  '/', 
  authMiddleware.isLoggedUser, 
  authMiddleware.isAdmin,
  membersControllers.getAll
);

module.exports = membersRouter;
