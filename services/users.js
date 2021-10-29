const usersRepository = require('../repositories/users')

const existEmailUser = async () => {
  const user = await usersRepository.getByEmail(email)
  return user
}

const getAll = async () => {
  return await usersRepository.getAll()
}

const getById = async (id) => {
  return await usersRepository.getById(id)
}

const create = async (data) => {
  return await usersRepository.create(data)
}

const update = async (id, data) => {
  return await usersRepository.update(id, data)
}

const remove = async (id) => {
  return await usersRepository.remove(id)
}

module.exports = {
  getAll, getById, create, update, remove, existEmailUser
}
