const usersRepository = require('../repositories/users')

const existEmailUser = async () => {
  const user = await usersRepository.findByEmail(email)
  return user
}

module.exports = { existEmailUser }