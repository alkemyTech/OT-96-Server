const { check, validationResult } = require('express-validator');

module.exports = [
  check('name')
    .notEmpty()
    .withMessage('You need to enter a name!')
    .bail()
    .isAlphanumeric()
    .withMessage('Invalid Name')
    .bail(),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    next();
  }
];
