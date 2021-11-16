const { check, validationResult } = require('express-validator');

const errorHandler = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  next();
};

const validateMember = [
  check('name')
    .notEmpty()
    .withMessage('You need to enter a name!')
    .bail()
    .withMessage('Invalid Name')
    .bail(),

  errorHandler
];

module.exports = { validateMember };
