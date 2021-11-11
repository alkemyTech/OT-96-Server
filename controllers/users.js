const usersService = require('../services/users');
const security = require('../services/security');

const getAll = async (req, res, next) => {
  try {
    const users = await usersService.getAll();
    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};

const create = async (req, res, next) => {
  try {
    const newUser = await usersService.create(req.body);
    const token = security.generateToken(newUser);
    res.status(200).json({
      success: true,
      msg: `${newUser.firstName} your user has been created`,
      user: newUser,
      token: token
    });
  } catch (error) {
    next(error);
  }
};

const update = async (req, res, next) => {
  try {
    const updateUser = await usersService.update(req.params.id, req.body);
    res.status(200).json({
      success: true,
      msg: `User ${req.params.id} is updated succesfully`,
      User: updateUser
    });
  } catch (error) {
    next(error);
  }
};

const remove = async (req, res, next) => {
  try {
    const response = await usersService.remove(req.params.id);
    return res.status(200).json(response);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAll,
  create,
  update,
  remove
};
