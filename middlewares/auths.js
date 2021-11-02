const securityService = require('../services/security');
const usersService = require('../services/users')


async function isAdmin(req, res, next) {
  const token = req.headers['authorization'];

  if (!token) {
    res.status(403).json({ message: 'No token provided' });
    return;
  }

  const userId = securityService.verifyToken(token).id;
  if (!userId) {
    res.status(401).json({ message: 'Unauthorized' });
  }

  const user = usersService.getById(userId);
  if (!user) {
    res.status(404).json({ message: 'no user found' });
    return;
  }

  if (user.roleId !== 1) {
    req.status(403).json({ message: 'Require Admin role' });
    return;
  }
  next();
}

async function isOwnership(req, res, next) {
  try {
    const { id } = req.params;
    const token = req.headers['authorization'];

    if (!token) {
      res.status(403).json({ message: 'No token provided' });
      return;
    }

    const userId = securityService.verifyToken(token).id;
    if (!userId) {
      res.status(401).json({ message: 'Unauthorized' });
      return;
    }

    const user = await usersService.getById(userId);
    if (!user) {
      res.status(404).json({ message: 'no user found' });
      return;
    }

    if (user.roleId === 1) {
      next();
    }

    if (id === user.id) {
      next();
    }

    res.status(403).json({ message: 'Forbidden' });
  } catch (error) {
    next(error);
  }
}

// checks if a correct token was given
async function verifyToken(req, res, next) {
  try {
    const authHeader = req.headers['authorization'];
    // if authorization parameter exists at headers
    if (authHeader) {
      // get token from authHeader at position 1
      const token = authHeader.split("")[1];
      if (!token) {
        const error = { msg: "No token provided!", status: 401 };
        throw error;
      };
      // if token exists call securityService
      const decodedUser = securityService.verifyToken(token);
      if (!decodedUser) {
        const error = { msg: "Unauthorized! Please enter a valid token provided at login", status: 403 };
        throw error;
      } else {
        // if authService returns userId
        req.userId = decodedUser.id;
        next();
      }
    } else {
      const error = { msg: "No token provided!", status: 401 };
      throw error;
    }
  } catch (error) {
    next(error);
  }
}

module.exports = { isAdmin, isOwnership, verifyToken };
