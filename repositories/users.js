const { Model } = require('sequelize/types');
const usersModel = require('../models/user');

async function create(userData) {
  const response = await usersModel.create({
    firstName: userData.firstName,
    lastName: userData.lastName,
    password: userData.password,
    email: userData.email,
    photo: userData.photo,
    roleId: userData.roleID,
  });
  return response;
}

module.exports = { create };
