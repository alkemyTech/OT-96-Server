const securityService = require('./services/security');

// checks if a correct token was given
async function verifyToken(req, res, next) {
  try {
    const authHeader = req.headers['authorization'];
    // if authorization parameter exists at headers
    if (authHeader) {
      // get token from authHeader at position 1
      const token = authHeader.split("")[1];
      if (!token) {
        const error = "No token provided!";
        error.status = 401;
        throw error;
      };
      // if token exists call securityService
      let userId = securityService.verifyToken(token).id;
      if (!userId) {
        const error = "Unauthorized! Please enter a valid token provided at login";
        error.status = 403;
        throw error;
      } else {
        // if authService returns userId
        req.userId = userId;
        next();
      }
    } else {
      const error = "No token provided!";
        error.status = 401;
        throw error;
    }
  } catch (error) {
    next(error);
  }
}

module.exports = { verifyToken };