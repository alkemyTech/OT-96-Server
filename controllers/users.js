const User = require('../repositories/user');

const getAll = async (req, res) => {
  try {
    const response = await User.getAll();
    return res.status(200).json(response)
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' })
  }
}

const getOne = async (req, res) => {
  try {
    const response = await User.getById(req.params.id);
    return res.status(200).json(response)
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' })
  }
}

const create = async (req, res) => {
  try {
    const response = await User.create(req.body);
    return res.status(200).json(response)
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' })
  }
}

const update = async (req, res) => {
  try {
    const response = await User.update(req.params.id, req.body);
    return res.status(200).json(response)
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' })
  }
}

const remove = async (req, res) => {
  try {
    const response = await User.remove(req.params.id)
    return res.status(200).json(response)
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' })
  }
}

module.exports = {
  getAll, getOne, create, update, remove
}
