const express = require('express');
const testimonialsRouter = express.Router();
const testimonialsController = require('../controllers/testimonials');
const authMiddleware = require('../middlewares/auths');

testimonialsRouter.delete(
  '/:id',
  authMiddleware.isAdmin,
  testimonialsController.remove
);

module.exports = testimonialsRouter;
