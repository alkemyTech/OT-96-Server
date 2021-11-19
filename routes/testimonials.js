const express = require('express');
const testimonialsRouter = express.Router();
const testimonialsController = require('../controllers/testimonials');
const authMiddleware = require('../middlewares/auths');
const testimonialsMiddleware = require('../middlewares/testimonials.js');
const pagination = require('../middlewares/pagination');

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

testimonialsRouter.get(
  '/',
  authMiddleware.isAdmin,
  pagination.validateAndParseTestimonial,
  testimonialsController.getAll
);

module.exports = testimonialsRouter;
