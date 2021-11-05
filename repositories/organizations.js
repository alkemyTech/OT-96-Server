const db = require('../models');

const getOrganizationPublic = async (id) => {
  const response = await db.Organization.findByPk({
    id,
    attributes: ['name', 'image', 'phone', 'address'],
  });
  return response;
};

async function getAll() {
  const organization = await db.Organization.findAll();
  return organization;
}

async function getById(id) {
  const organization = await db.Organization.findOne({
    where: {
      id: id,
    },
  });
  return organization;
}

async function create(data) {
  const organization = await db.Organization.create({
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
  const organization = await db.Organization.update(values, {
    ...condition,
  });
  return organization;
}

async function remove(id) {
  const organization = await db.Organization.destroy({
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
