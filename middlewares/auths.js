const securityService = require('../services/security');
const usersService = require('../services/users');
const rolesService = require('../services/roles');
const commentsRepository = require('../repositories/comments');

const tokenId = (req) => {
  const token = req.headers['authorization'];
  if (!token) {
    const error = new Error('No token provided!');
    error.status = 401;
    throw error;
  }
  const decodedUser = securityService.verifyToken(token);
  if (!decodedUser) {
    const error = new Error(
      'Unauthorized! Please enter a valid token provided at login'
    );
    error.status = 403;
    throw error;
  }
  return decodedUser.id;
};

const isLoggedUser = async (req, res, next) => {
  try {
    req.userId = tokenId(req);
    next();
  } catch (error) {
    next(error);
  }
};

const isOwnUser = async (req, res, next) => {
  try {
    const reqId = tokenId(req);
    const { id } = req.params;
    const userFound = await usersService.getById(reqId);
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

const isOwnComment = async (req, res, next) => {
  try {
    const reqId = tokenId(req);
    const { id } = req.params;
    const userFound = await usersService.getById(reqId);
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
    const comment = await commentsRepository.getById(id);
    if (comment.UserId === userFound.id) {
      return next();
    }
    const error = new Error('it isnt your comment or you are not an admin');
    error.status = 403;
    throw error;
  } catch (error) {
    next(error);
  }
};

const isAdmin = async (req, res, next) => {
  try {
    const id = tokenId(req);
    const userFound = await usersService.getById(id);
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

module.exports = { isAdmin, isOwnUser, isLoggedUser, isOwnComment };
