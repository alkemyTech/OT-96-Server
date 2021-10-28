const usersRepository = require('../repositories/users')

const getAll = async () => {
  let error, response
  response = await usersRepository.getAll()
  if(response) error = false
  return {response, error}
}

const getById = async (id) => {
  let error, response
  response = await usersRepository.getById(id)
  if(response) error = false
  return {response, error}
}

const create = async (data) => {
  let error, response
  response = await usersRepository.create(data)
  if(response) error = false
  return {response, error}
}

const update = async (id, data) => {
  let error, response
  response = await usersRepository.update(id, data)
  if(response) error = false
  return {response, error}
}

const remove = async (id) => {
  let error, response
  response = await usersRepository.remove(id)
  if(response) error = false
  return {response, error}
}

module.exports = {
  getAll, getById, create, update, remove
}
