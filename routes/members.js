const express = require('express');
const membersRouter = express.Router();
const membersControllers = require('../controllers/members');
const authMiddleware = require('../middlewares/auths');
const membersMiddleware = require('../middlewares/members');

membersRouter.get('/', authMiddleware.isAdmin, membersControllers.getAll);

membersRouter.post(
  '/',
  authMiddleware.isLoggedUser,
  membersMiddleware.validateMember,
  membersControllers.create
);

module.exports = membersRouter;
