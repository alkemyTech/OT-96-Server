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

const isOwnUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const userFound = await usersService.getById(req.userId);
    if (!userFound) {
      const error = new Error('no user found');
      error.status = 404;
      throw error;
    }
    const role = await rolesService.getByName('Admin');
    if (!role) {
      const error = new Error('no role found');
      error.status = 404;
      throw error;
    }
    if (userFound.roleId === role.id) {
      return next();
    }
    if (+id === userFound.id) {
      return next();
    }
    const error = new Error('Forbidden');
    error.status = 403;
    throw error;
  } catch (error) {
    next(error);
  }
};

const isAdmin = async (req, res, next) => {
  try {
    const userFound = await usersService.getById(req.userId);
    if (!userFound) {
      const error = new Error('no user found');
      error.status = 404;
      throw error;
    }
    const role = await rolesService.getByName('Admin');
    if (!role) {
      const error = new Error('no role found');
      error.status = 404;
      throw error;
    }
    if (userFound.roleId !== role.id) {
      const error = new Error('Requiere admin role');
      error.status = 403;
      throw error;
    }
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = { isAdmin, isOwnUser, verifyToken };
