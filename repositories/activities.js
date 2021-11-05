const { Activity } = require('../models/activity');

const getAll = async () => {
  const response = await Activity.findAll({});
  return response;
};

const getById = async (id) => {
  const response = await Activity.findByPk(id);

  return response;
};

const getByName = async (name) => {
  const response = await Activity.findOne({
    where: { name },
  });
  return response;
};

const create = async ({ name, content, image }) => {
  const response = await Activity.create({ name, content, image });
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
  getByName,
  create,
  update,
  remove,
};
