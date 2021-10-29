const { Router } = require('express');
const organizationRouter = Router();
const organizationController = require('../controllers/organization.js')


organizationRouter.get('/:id/public', organizationController.getOrganizationPublic);

module.exports = organizationRouter;