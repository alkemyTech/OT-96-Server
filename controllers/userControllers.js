const User = require('../repositories/user');

const getAllUser = async (req, res) => {
  try {
    const response = await User.getAll();
    res.send(response);
  } catch (error) {
    res.send('error');
  }
}

const getUser = async (req, res) => {
  try {
    const response = await User.getById(req.params.id);
    res.send(response);
  } catch (error) {
    res.send('error');
  }
}

const createUser = async (req, res) => {
  try {
    const response = await User.getById(req.params.id);
    res.send(response);
  } catch (error) {
    res.send('error');
  }
}

const updateUser = async (req, res) => {
  try {
    const response = await User.update(req.params.id, req.body);
    res.send(response);
  } catch (error) {
    res.send('error');
  }
}

const deleteUser = async (req, res) => {
  try {
    const response = await User.softDelete(req.params.id)
    res.send(response);
  } catch (error) {
    res.send('error');
  }
}

module.exports = {
  getAllUser, getUser, createUser, updateUser, deleteUser
}
