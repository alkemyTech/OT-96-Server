const { Router } = require('express');
const organizationRouter = Router();
const organizationController = require('../controllers/organization');
const authMiddleware = require('../middlewares/auths');
const organizationValidation = require('../middlewares/organizationValidation');

organizationRouter.get(
  '/:id/public',
  organizationController.getOrganizationPublic
);
organizationRouter.post(
  '/:id/public',
  authMiddleware.isAdmin,
  organizationValidation.validateOrganization,
  organizationController.update
);

module.exports = organizationRouter;
