const express = require('express');
const contactsRouter = express.Router();
const contactsController = require('../controllers/contacts');
const contactsMiddlewares = require('../middlewares/contacts');
const authMiddleware = require('../middlewares/auths');

contactsRouter.get('/', authMiddleware.isAdmin, contactsController.getAll);

contactsRouter.post(
  '/',
  authMiddleware.isLoggedUser,
  contactsMiddlewares.validateContacts,
  contactsController.create
);

module.exports = contactsRouter;
