const usersService = require('../services/users');

async function create(req, res, next) {
  try {
    const newUser = await usersService.create(req.body);
    res.status(200).json({
      success: true,
      msg: `${newUser.firstName} your user has been created`,
      user: newUser,
    });
  } catch (err) {
    next(err);
  }
}

modules.exports = { create };
