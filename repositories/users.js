const usersModel = require('../models').User;

async function create(userData) {
  const user = await usersModel.create(userData);
  return user;
}

module.exports = { create, getByEmail };
