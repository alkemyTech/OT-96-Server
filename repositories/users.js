const usersModel = require('../models').User;

async function create(userData) {
  const user = await usersModel.create(userData);
  return user;
}

async function getByEmail(email) {
  const user = await usersModel.findOne({
    where: {
      email: email,
    },
  });

  return user;
}

module.exports = { create, getByEmail };
