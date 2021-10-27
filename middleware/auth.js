const jwt = require('jsonwebtoken');

require('dotenv').config();

// checks if a correct token was given
async function verifyToken(req, res, next) {
  const authHeader = req.headers['authorization'];

  // if authorization parameter exists at headers
  if (authHeader) {
    // get token from authHeader at position 1
    const token = authHeader.split("")[1];
    if (!token) {
      return res.status(403).send({
        message: "No token provided! Please enter your accessToken in HTTP headers"
      });
    };
    // if token exists decrypt it and compare it to app's secret token key
    jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
      if (err) {
        return res.status(401).send({
          error: err,
          message: "Unauthorized! Please enter a valid token provided at login"
        });
      }
      req.userId = decoded.id;
      next();
    });
  };
}

module.exports = { verifyToken };