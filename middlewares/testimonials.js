const { check, validationResult } = require('express-validator');

const errorHandler = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  next();
};

const validateTestimonial = [
  check('name')
    .notEmpty()
    .withMessage('You need to enter a name!')
    .bail()
    .isAlphanumeric()
    .withMessage('Invalid Name')
    .bail(),

  check('content')
    .notEmpty()
    .withMessage('You need to enter a content!')
    .bail(),

  errorHandler
];
module.exports = { validateTestimonial };
