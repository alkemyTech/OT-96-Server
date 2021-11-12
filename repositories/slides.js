const db = require('../models');

const getAll = async () => {
  const Slide = await db.Slide.findAll({
    attributes: ['imageUrl', 'order']
  });
  return Slide;
};

const getById = async (id) => {
  const Slide = await db.Slide.findByPk(id);
  return Slide;
};

const create = async (data) => {
  const Slide = await db.Slide.create(data);
  return Slide;
};

const update = async (id, data) => {
  const Slide = await db.Slide.update(data, {
    where: {
      id
    }
  });
  return Slide;
};

const remove = async (id) => {
  const Slide = await db.Slide.destroy({
    where: {
      id
    }
  });
  return Slide;
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove
};
