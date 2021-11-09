const { check, validationResult } = require('express-validator');

const validateActivities = [
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
    .bail()
    .isAlphanumeric()
    .withMessage('the content fail')
    .bail(),

  check('image').notEmpty().withMessage('You need to enter a image!').bail(),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    next();
  }
];

module.exports = { validateActivities };
