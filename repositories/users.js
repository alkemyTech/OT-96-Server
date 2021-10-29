const { User } = require('../models.users');

async function create(userData) {
  const user = await User.create(userData);
  return user;
}

module.exports = { create, getByEmail };
