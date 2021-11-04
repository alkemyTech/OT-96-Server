const { Activity } = require('../models/activity');

const getAll = async () => {
  const response = await Activity.findAll({
    attributes: {
      exclude: ['content', 'deletedAt', 'createdAt', 'updatedAt'],
    },
  });

  return response;
};

const getById = async (id) => {
  const response = await Activity.findByPk(id);

  return response;
};

const create = async (data) => {
  const response = await Activity.create(data);

  return response;
};

const update = async (id, data) => {
  const response = await Activity.update(data, {
    where: {
      id: id,
    },
  });

  return response;
};

const remove = async (id) => {
  const response = await Activity.destroy({
    where: {
      id: id,
    },
  });

  return response;
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};
