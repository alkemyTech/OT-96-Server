const { User } = require('../models');

const getAll = async () => {
  const response = await User.findAll();
  return response;
};

const getById = async (id) => {
  const response = await User.findByPk(id);
  return response;
};

async function create(userData) {
  const user = await User.create(userData);
  return user;
}

const update = async (id, data) => {
  const response = await User.update(data, {
    where: {
      id,
    },
  });
  return response;
};

const remove = async (id) => {
  const respose = await User.destroy({
    where: {
      id,
    },
  });
  return respose;
};




const getByEmail = async (email) => {
  const response = await User.findOne({
    where: {
      email
    }
  });
  return response;
}
module.exports = { getAll, getById, create, update, remove, getByEmail};

