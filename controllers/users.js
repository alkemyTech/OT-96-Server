const usersService = require('../services/users');

const getAll = async (req, res) => {
  
}

const getById = async (req, res) => {
  
}

const create = async (req, res) => {
  
}

const update = async (req, res) => {
  
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
