const { check, validationResult } = require('express-validator');

const errorHandler = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  next();
};

const validateOrganization = [
  check('name')
    .notEmpty()
    .withMessage('You need to enter a name!')
    .bail(),

  check('image').notEmpty().withMessage('You need to enter a image!').bail(),

  check('welcomeText')
    .notEmpty()
    .withMessage('You need to enter a welcomeText!')
    .bail()
    .isAlpha()
    .withMessage('welcomeText can only contain alphnumeric caracters')
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
module.exports = { validateOrganization };
