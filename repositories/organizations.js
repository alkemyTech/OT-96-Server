const organizationsModel = require('../models/organization');

//repository organization

async function getAll() {
  const response = await organizationsModel.findAll();
  return response;
}

async function getById(id) {
  const response = await organizationsModel.findOne({
    where: {
      id: id,
    },
  });
  return response;
}

async function create(data) {
  const response = await organizationsModel.create({
    name: data.name,
    image: data.image,
    address: data.address,
    phone: data.phone,
    email: data.email,
    welcomeText: data.welcomeText,
    aboutUsText: data.aboutUsText,
  });
  return response;
}

async function update(id, data) {
  const options = { multi: true };
  const values = {
    name: data.name,
    image: data.image,
    address: data.address,
    phone: data.phone,
    email: data.email,
    welcomeText: data.welcomeText,
    aboutUsText: data.aboutUsText,
  };
  const condition = {
    where: {
      id: id,
    },
  };
  const organizationUpdated = await organizationsModel.update(values, {
    ...condition,
    ...options,
  });
  return organizationUpdated;
}

async function remove(id) {
  const organizationDeleted = await organizationsModel.destroy({
    where: {
      id: id,
    },
  });
  return organizationDeleted;
}

module.exports = { getAll, getById, create, update, remove };
