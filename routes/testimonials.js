const express = require('express');
const testimonialsRouter = express.Router();
const testimonialsController = require('../controllers/testimonials');
const authMiddleware = require('../middlewares/auths');

testimonialsRouter.put(
  '/:id',
  authMiddleware.isAdmin,
  testimonialsController.update
);

module.exports = testimonialsRouter;
