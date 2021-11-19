const db = require('../models');

const getOrganizationPublic = async (id) => {
  const response = await db.Organization.findByPk(id, {
    attributes: [
      'name',
      'image',
      'phone',
      'address',
      'facebookUrl',
      'linkedinUrl',
      'instagramUrl'
    ]
  });
  return response;
};

const getAll = async () => {
  const organization = await db.Organization.findAll();
  return organization;
};

const getById = async (id) => {
  const organization = await db.Organization.findByPk(id);
  return organization;
};

const create = async (data) => {
  const organization = await db.Organization.create(data);
  return organization;
};

const update = async (id, data) => {
  const organization = await db.Organization.update(data, {
    where: {
      id
    }
  });
  return organization;
};

const remove = async (id) => {
  const organization = await db.Organization.destroy({
    where: {
      id
    }
  });
  return organization;
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
  getOrganizationPublic
};
