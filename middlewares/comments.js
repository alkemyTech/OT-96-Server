const { check, validationResult } = require('express-validator');

const errorHandler = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  next();
};

const validateComments = [
  check('newsId')
    .notEmpty()
    .withMessage('You need to enter a newsID!')
    .bail()
    .isNumeric()
    .withMessage('Invalid newsId')
    .bail(),
  check('userId')
    .notEmpty()
    .withMessage('You need to enter a userId!')
    .bail()
    .isNumeric()
    .withMessage('Invalid userId')
    .bail(),
  check('body').notEmpty().withMessage('You need to enter a body!').bail(),

  errorHandler
];

module.exports = { validateComments };
