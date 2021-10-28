const usersModel = require('../models').user;

async function create(userData) {
  const user = await usersModel.create(userData);
  return user;
}

module.exports = { create };
