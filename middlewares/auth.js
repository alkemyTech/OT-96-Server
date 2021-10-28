const authService = require('./services/auth');

// checks if a correct token was given
async function verifyToken(req, res, next) {
  const authHeader = req.headers['authorization'];

  // if authorization parameter exists at headers
  if (authHeader) {
    // get token from authHeader at position 1
    const token = authHeader.split("")[1];
    if (!token) {
      return res.status(403).send({
        message: "No token provided!"
      });
    };
    // if token exists call authService
    let userId = authService(token);
    if (!userId){
      return res.status(403).send({
        error: err,
        message: "Unauthorized! Please enter a valid token provided at login"
      });
    } else {
      // if authService returns userId
      req.userId = decoded.id;
      next();
    }
  };
}

module.exports = { verifyToken };