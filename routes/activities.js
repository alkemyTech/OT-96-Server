const express = require('express');
const activityRouter = express.Router();
const authMiddleware = require('../middlewares/auths');
const activitiesController = require('../controllers/activities');
const activitiDataValidation = require('../middlewares/activityDataValidation');

activityRouter.post(
  '/',
  activitiDataValidation,
  authMiddleware.isOwnedMember,
  authMiddleware.isAdmin,
  activitiesController.create
);
