const authenticationsService = require('../services/authentications');
const usersServices = require('../services/users');
const { generateToken } = require('../services/security');
const usersService = require('../services/users');

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const existingUser = await usersServices.existEmailUser(email);
    if (!existingUser)
      return res.status(400).json({ ok: false, message: 'email dont exist' });

    const match = await authenticationsService.comparePasswords(
      password,
      existingUser.dataValues.password
    );

    if (match) {
      const { id, firstName, lastName, email, roleId } =
        existingUser.dataValues;
      const user = { id, firstName, lastName, email, roleId };

      const token = generateToken(existingUser.dataValues);
      res.status(200).json({
        accessToken: token,
        user,
      });
    } else {
      res.status(400).json({ ok: false, message: 'no hubo match' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const myData = async (req, res, next) => {
  try {
    let token = req.headers['authorization'];
    const userDecoded = securityService.verifyToken(token);
    const user = usersService.getById(userDecoded.id);
    if (!user) {
      const error = new error(`User with id: ${user.id} not found`);
      error.status = 404;
      throw error;
    }
    res.status(200).json({
      success: true,
      msg: `My Data:`,
      User: user,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { login, myData };
