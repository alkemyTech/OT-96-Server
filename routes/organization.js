const express = require('express');
const organizationRouter = express.Router();
const organizationController = require('../controllers/organization');
const authMiddleware = require('../middlewares/auths');
const validateOrganization = require('../middlewares/organizations');

organizationRouter.get(
  '/:id/public',
  organizationController.getOrganizationPublic
);
organizationRouter.post(
  '/:id/public',
  authMiddleware.isAdmin,
  validateOrganization,
  organizationController.update
);

module.exports = organizationRouter;
