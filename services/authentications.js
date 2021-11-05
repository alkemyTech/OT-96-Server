const bcrypt = require('bcryptjs');
// const Joi = require('joi')
const jwt = require('jsonwebtoken');

// const loginSchema = Joi.object({
//   email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
//   password: Joi.string().min(3).max(30).required()
// })

module.exports = {
  async comparePasswords(password, userPassword) {
    const match = await bcrypt.compare(password, userPassword);
    return match;
  },

  // validateLoginDetails (user) {
  //   return loginSchema.validate(user)
  // },
};
