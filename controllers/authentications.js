const authenticationsService = require('../services/authentications');
const usersService = require('../services/users');
const securityService = require('../services/security');

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const existingUser = await usersService.existEmailUser(email);
    if (!existingUser) {
      const error = new Error(`The email provided doesen't exists`);
      error.status = 400;
      throw error;
    }

    const match = await authenticationsService.comparePasswords(
      password,
      existingUser.dataValues.password
    );

    if (!match) {
      const error = new Error('Invalid password or user');
      error.status = 400;
      throw error;
    }

    const { id, firstName, lastName, userRoleId } = existingUser.dataValues;
    const user = { id, firstName, lastName, email, userRoleId };

    const token = securityService.generateToken(existingUser.dataValues);
    res.status(200).json({
      accessToken: token,
      user
    });
  } catch (error) {
    next(error);
  }
};

const myData = async (req, res, next) => {
  try {
    const user = await usersService.getById(req.userId);
    if (!user) {
      const error = new error(`User with id: ${user.id} not found`);
      error.status = 404;
      throw error;
    }
    res.status(200).json({
      success: true,
      msg: `My Data:`,
      data: user
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { login, myData };
