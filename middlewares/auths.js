const securityService = require('../services/security');
const usersService = require('../services/users');
const rolesService = require('../services/roles');

const verifyToken = async (req, res, next) => {
  try {
    const token = req.headers['authorization'];
    if (!token) {
      const error = { msg: 'No token provided!', status: 401 };
      throw error;
    }
    const decodedUser = securityService.verifyToken(token);
    if (!decodedUser) {
      const error = {
        msg: 'Unauthorized! Please enter a valid token provided at login',
        status: 403
      };
      throw error;
    } else {
      req.userId = decodedUser.id;
      next();
    }
  } catch (error) {
    next(error);
  }
};

const isOwnedMember = async (req, res, next) => {
  try {
    const { id } = req.params;
    const token = req.headers['authorization'];

    if (!token) {
      res.status(403).json({ message: 'No token provided' });
      return;
    }
    const user = securityService.verifyToken(token);
    if (!user) {
      res.status(401).json({ message: 'Unauthorized' });
      return;
    }
    const userFound = await usersService.getById(user.id);
    if (!userFound) {
      res.status(404).json({ message: 'no user found' });
      return;
    }
    if (id === userFound.id) {
      next();
    }
    res.status(403).json({ message: 'Forbidden' });
  } catch (error) {
    next(error);
  }
};

const isAdmin = async (req, res, next) => {
  try {
    verifyToken(req, res, next);
    const role = await rolesService.getByName('Admin');
    if (!role) {
      res.status(404).json({ message: 'no role found' });
      return;
    }
    if (userFound.roleId !== role.id) {
      res.status(403).json({ message: 'Require Admin role' });
      return;
    }
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = { isAdmin, isOwnedMember, verifyToken };
