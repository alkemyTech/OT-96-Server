require("dotenv").config();
const jwt = require("jsonwebtoken");
const config = require("../config/config");

const generateToken = (user) => {
  const userForToken = {
    id: user.id,
    firstName: user.firstName,
    lastName: user.lastName,
    roleId: user.roleId,
  };

  const token = jwt.sign(userForToken, config.development.SECRET_TOKEN, {
    expiresIn: "10h",
  });
  return token;
};

const verifyToken = (token, next) => {
  try {
    const decodedToken = jwt.verify(token, config.development.SECRET_TOKEN);
    return decodedToken;
  } catch (error) {
    return false;
  }
};

module.exports = { generateToken, verifyToken };