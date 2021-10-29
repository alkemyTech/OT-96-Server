const { User } = require('../models')
//repository organization
async function getAll() {
  const response = await User.findAll()
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

async function remove(id) {
  const userDeleted = await User.destroy({
    where: {
      id
    }
  });
  return userDeleted;
}

async function findByEmail(email) {
  const user = await User.findOne({
    where: { email }
  })
  return user
}

module.exports = { getAll, getById, create, update, remove, findByEmail };