const usersService = require('../services/users');

const getAll = async (req, res) => {};

const getById = async (req, res) => {};

async function create(req, res, next) {
  try {
    const newUser = await usersService.create(req.body);
    res.status(200).json({
      success: true,
      msg: `${newUser.firstName} your user has been created`,
      user: newUser,
    });
  } catch (err) {
    console.log(err)
    next(err);
  }
}

const update = async (req, res) => {
  try {
    const updateUser = await usersService.update(
      req.params.id,
      req.body
    );
    res.status(200).json({
      success: true,
      msg: `User ${req.params.id} is updated succesfully`,
      User : updateUser,
    });
  } catch (err) {
    next(error);
  }
};

const remove = async (req, res) => {
  try {
    const response = await usersService.remove(req.params.id);
    return res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};
