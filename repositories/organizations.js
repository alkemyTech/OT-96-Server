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
  const response = await db.Organization.findAll();
  return response;
};

const getById = async (id) => {
  const response = await db.Organization.findByPk(id);
  return response;
};

const create = async (data) => {
  const response = await db.Organization.create(data);
  return response;
};

const update = async (id, data) => {
  const response = await db.Organization.update(data, {
    where: {
      id
    }
  });
  return response;
};

const remove = async (id) => {
  const response = await db.Organization.destroy({
    where: {
      id
    }
  });
  return response;
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
  getOrganizationPublic
};
