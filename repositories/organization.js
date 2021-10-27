const organization = require('../models').organization;

//repository organization

async function getAll() {
  const response = await organization.findAll();
  return response;
}

async function getById(id) {
  const response = await organization.findOne({
    where: {
      id: id,
    },
  });
  return response;
}

async function create(data) {
  const response = await organization.create({
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
  const organizationUpdated = await organization.update(values, {
    ...condition,
    ...options,
  });
  return organizationUpdated;
}

async function softDelete(id) {
  const organizationDeleted = await organization.destroy({
    where: {
      id: id,
    },
  });
  return organizationDeleted;
}

module.exports = { getAll, getById, create, update, softDelete };
