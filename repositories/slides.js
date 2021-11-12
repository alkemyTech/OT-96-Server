const db = require('../models');

const getAll = async () => {
  const response = await db.Slide.findAll();
  return response;
};

const getById = async (id) => {
  const response = await db.Slide.findByPk(id);
  return response;
};

const create = async (data) => {
  const response = await db.Slide.create(data);
  return response;
};

const update = async (id, data) => {
  const response = await db.Slide.update(data, {
    where: {
      id
    }
  });
  return response;
};

const remove = async (id) => {
  const response = await db.Slide.destroy({
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
  remove
};
