const { Router } = require('express');
const organizationRouter = Router();
const organizationController = require('../controllers/organization.js')
const { isAdmin } = require('../middlewares/auths')
const { validateOrganization } = require('../middlewares/organizationValidation')


organizationRouter.get('/:id/public', organizationController.getOrganizationPublic);
organizationRouter.post('/:id/public',isAdmin, validateOrganization ,organizationController.update);

module.exports = organizationRouter;