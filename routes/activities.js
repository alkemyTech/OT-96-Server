const express = require('express');
const activitiesRouter = express.Router();
const authMiddleware = require('../middlewares/auths');
const activitiesController = require('../controllers/activities');
const activitiesDataValidation = require('../middlewares/activitiesDataValidation');

activitiesRouter.post(
  '/',
  activitiesDataValidation,
  authMiddleware.isAdmin,
  activitiesController.create
);

activitiesRouter.put(
  '/:id',
  activitiesDataValidation,
  authMiddleware.isAdmin,
  activitiesController.update
);

module.exports = activitiesRouter;
