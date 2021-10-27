const User = require('../models').user;

//repository organization

async function getAll() {
  const response = await User.findAll();
  return response;
}

async function getById(id) {
  const response = await User.findOne({
    where: {
      id: id
    }
  });
  return response;
}

async function create(data) {
  const response = await User.create(data);
  return response;
}

async function update(id, data) {
  const userUpdated = await User.update(data, {
    where:{
      id
    }
  });
  return userUpdated;
}

async function softDelete(id) {
  const userDeleted = await User.destroy({
    where: {
      id
    }
  });
  return userDeleted;
}

module.exports = { getAll, getById, create, update, softDelete };