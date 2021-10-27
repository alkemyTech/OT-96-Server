const User = require('../repositories/user');

const getAllUser = async (req, res) => {
  try {
    const response = await User.getAll();
    return res.status(200).json(response)
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' })
  }
}

const getUser = async (req, res) => {
  try {
    const response = await User.getById(req.params.id);
    return res.status(200).json(response)
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' })
  }
}

const createUser = async (req, res) => {
  try {
    const response = await User.create(req.body);
    return res.status(200).json(response)
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' })
  }
}

const updateUser = async (req, res) => {
  try {
    const response = await User.update(req.params.id, req.body);
    return res.status(200).json(response)
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' })
  }
}

const deleteUser = async (req, res) => {
  try {
    const response = await User.softDelete(req.params.id)
    return res.status(200).json(response)
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' })
  }
}

module.exports = {
  getAllUser, getUser, createUser, updateUser, deleteUser
}
