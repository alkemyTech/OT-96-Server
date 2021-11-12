const express = require('express');
const membersRouter = express.Router();
const membersController = require('../controllers/members');

membersRouter.delete('/:id', membersController.remove);

module.exports = membersRouter;
