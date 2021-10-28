const usersService = require('../services/users');

const getAll = async (req, res) => {
  try {
    const response = await usersService.getAll();
    return res.status(200).json(response)
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' })
  }
}

const getById = async (req, res) => {
  try {
    const response = await usersService.getById(req.params.id);
    return res.status(200).json(response)
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' })
  }
}

const create = async (req, res) => {
  try {
    const response = await usersService.create(req.body);
    return res.status(200).json(response)
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' })
  }
}

const update = async (req, res) => {
  try {
    const response = await usersService.update(req.params.id, req.body);
    return res.status(200).json(response)
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' })
  }
}

const remove = async (req, res) => {
  try {
    const response = await usersService.remove(req.params.id)
    return res.status(200).json(response)
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' })
  }
}

module.exports = {
  getAll, getById, create, update, remove
}
