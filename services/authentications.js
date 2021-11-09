const bcrypt = require('bcryptjs');

const comparePasswords = async (password, userPassword) => {
  const match = await bcrypt.compare(password, userPassword);
  return match;
};

module.exports = {
  comparePasswords
};
