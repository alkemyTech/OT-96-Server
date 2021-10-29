require("dotenv").config();
const jwt = require("jsonwebtoken");
const config = require("../config/config");

const genToken = (user) => {
  const userForToken = {
    user: user.id,
    name: user.name,
    idRol: user.idRol,
  };

  const token = jwt.sign(userForToken, config.development.SECRET_TOKEN, {
    expiresIn: "10h",
  });
  return token;
};

const verifyToken = (token, next) => {
  try {
    const decodedToken = jwt.verify(token, config.development.SECRET_TOKEN);
    

    if (!decodedToken) {
      const error = `Invalid Token`;
      error.status = 401;
      throw error;
    }

    return decodedToken;
  } catch (error) {
    next(error);
  }
};

module.exports = {
  genToken,
  verifyToken,
};
