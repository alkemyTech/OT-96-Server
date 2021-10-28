const bcrypt = require('bcrypt')
const Joi = require('joi')
const jwt = require('jsonwebtoken')
const userRepository = require('../repositories/user')

const loginSchema = Joi.object({
  email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
  password: Joi.string().min(3).max(30).required()
})

module.exports = {
  async hashPassword (password) {
    const hash = await bcrypt.hash(password, 10)
    return hash
  },

  comparePasswords (password, userPassword) {
    if (password === userPassword) {
      return true
    } else {
      return false
    }
    // const match = await bcrypt.compare(password, userPassword)
    // return match
  },

  validateLoginDetails (user) {
    return loginSchema.validate(user)
  },

  createToken (user) {
    const { firstName, email, roleId} = user
    return jwt.sign({ firstName, email, roleId }, '1234', { expiresIn: 86400 })
  },

  async existEmailUser (email) {
    const user = await userRepository.findByEmail(email)
    return user
  }
}