const authenticationsService = require('../services/authentications');
const usersService = require('../services/users');
const security = require('../services/security');

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const existingUser = await usersService.existEmailUser(email);
    if (!existingUser)
      return res
        .status(400)
        .json({ success: false, message: 'email dont exist' });

    const match = await authenticationsService.comparePasswords(
      password,
      existingUser.dataValues.password
    );

    if (match) {
      const { id, firstName, lastName, email, roleId } =
        existingUser.dataValues;
      const user = { id, firstName, lastName, email, roleId };

      const token = security.generateToken(existingUser.dataValues);
      res.status(200).json({
        accessToken: token,
        user
      });
    } else {
      res
        .status(400)
        .json({ success: false, message: 'invalid password or user' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
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
      user: user
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { login, myData };
