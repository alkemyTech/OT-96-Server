const express = require('express');
const activitiesRouter = express.Router();
const authMiddleware = require('../middlewares/auths');
const activitiesController = require('../controllers/activities');
const activitiesMiddleware = require('../middlewares/activities');

activitiesRouter.post(
  '/',
  activitiesMiddleware.validateActivity,
  authMiddleware.isAdmin,
  activitiesController.create
);

activitiesRouter.put(
  '/:id',
  activitiesMiddleware.validateActivity,
  authMiddleware.isAdmin,
  activitiesController.update
);

module.exports = activitiesRouter;
