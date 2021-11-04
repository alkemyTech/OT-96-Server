const { check, validationResult } = require('express-validator');

const newsDataValidation = [
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

  check('type')
    .notEmpty()
    .withMessage('Please enter type "news" for default!')
    .bail()
    .isLength({ min: 4 })
    .withMessage('The type must be at least 4 characters long')
    .bail(),

  check('categoryId')
    .notEmpty()
    .withMessage('You need enter a category ID!')
    .bail()
    .isNumeric()
    .withMessage('Invalid Category')
    .bail(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    next();
  },
];

module.exports = { newsDataValidation };
