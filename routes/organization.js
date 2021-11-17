const express = require('express');
const organizationRouter = express.Router();
const organizationsController = require('../controllers/organization');
const authMiddleware = require('../middlewares/auths');
const organizationsMiddleware = require('../middlewares/organizations');

organizationRouter.get(
  '/:id/public',
  organizationsController.getOrganizationPublic
);
organizationRouter.put(
  '/:id/public',
  authMiddleware.isAdmin,
  organizationsMiddleware.validateOrganization,
  organizationsController.update
);

module.exports = organizationRouter;
