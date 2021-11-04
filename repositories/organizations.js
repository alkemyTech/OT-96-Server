const Organization = require('../models').Organization;

const getOrganizationPublic = async (id) => {
  const response = await Organization.findByPk({
    id,
    attributes: ['name', 'image', 'phone', 'address'],
  });
  return response;
};

async function getAll() {
  const organization = await Organization.findAll();
  return organization;
}

async function getById(id) {
  const organization = await Organization.findOne({
    where: {
      id: id,
    },
  });
  return organization;
}

async function create(data) {
  const organization = await Organization.create({
    name: data.name,
    image: data.image,
    address: data.address,
    phone: data.phone,
    email: data.email,
    welcomeText: data.welcomeText,
    aboutUsText: data.aboutUsText,
  });
  return organization;
}

async function update(id, data) {
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
  const organization = await Organization.update(values, {
    ...condition,
  });
  return organization;
}

async function remove(id) {
  const organization = await Organization.destroy({
    where: {
      id: id,
    },
  });
  return organization;
}

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
  getOrganizationPublic,
};
