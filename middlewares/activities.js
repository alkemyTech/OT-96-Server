const { check, validationResult } = require('express-validator');

const errorHandler = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  next();
};

const validateActivity = [
  check('name')
    .notEmpty()
    .withMessage('You need to enter a name!')
    .bail()
    .isAlpha()
    .withMessage('Invalid Name')
    .bail(),

  check('content')
    .notEmpty()
    .withMessage('You need to enter a content!')
    .bail()
    .isAlpha()
    .withMessage('the content fail')
    .bail(),

  check('image').notEmpty().withMessage('You need to enter a image!').bail(),

  errorHandler
];

module.exports = { validateActivity };
