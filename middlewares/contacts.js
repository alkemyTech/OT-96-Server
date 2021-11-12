const { check, validationResult } = require('express-validator');

const errorHandler = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  next();
};

const validateContacts = [
  check('name')
    .notEmpty()
    .withMessage('You need to enter a name!')
    .bail()
    .isAlpha()
    .withMessage('Invalid Name')
    .bail(),

  check('email')
    .notEmpty()
    .withMessage('You need to enter an email!')
    .bail()
    .normalizeEmail()
    .isEmail()
    .withMessage('Invalid email. Ej:name@mail.com')
    .bail(),
  errorHandler
];

module.exports = { validateContacts };
