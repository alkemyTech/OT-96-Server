const express = require('express');
const testimonialsRouter = express.Router();
const testimonialsController = require('../controllers/testimonials');
const authMiddleware = require('../middlewares/auths');
const testimonialsMiddleware = require('../middlewares/testimonials.js');

testimonialsRouter.delete(
  '/:id',
  authMiddleware.isAdmin,
  testimonialsController.remove
);
testimonialsRouter.put(
  '/:id',
  authMiddleware.isAdmin,
  testimonialsController.update
);
testimonialsRouter.post(
  '/',
  authMiddleware.isAdmin,
  testimonialsMiddleware.validateTestimonial,
  testimonialsController.create
);

module.exports = testimonialsRouter;
