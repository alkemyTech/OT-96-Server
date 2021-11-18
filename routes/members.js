const express = require('express');
const membersRouter = express.Router();
const membersController = require('../controllers/members');
const authMiddleware = require('../middlewares/auths');
const membersMiddleware = require('../middlewares/members');
const pagination = require('../middlewares/pagination');

membersRouter.get(
  '/',
  authMiddleware.isAdmin,
  pagination.validate,
  membersController.getAll
);

membersRouter.post(
  '/',
  authMiddleware.isLoggedUser,
  membersMiddleware.validateMember,
  membersController.create
);

membersRouter.put(
  '/:id',
  authMiddleware.isLoggedUser,
  membersController.update
);

membersRouter.delete('/:id', membersController.remove);

module.exports = membersRouter;
