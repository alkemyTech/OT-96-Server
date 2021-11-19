const db = require('../models');

const getAll = async (limit, offset) => {
  const response = await db.Testimonial.findAll({
      limit: limit , offset: offset
     });
  return response;
};

const getById = async (id) => {
  const response = await db.Testimonial.findByPk(id);
  return response;
};

const getCount = async () => {
  const response = await db.Testimonial.count();
  return response;
};

const create = async (data) => {
  const response = await db.Testimonial.create(data);
  return response;
};

const update = async (id, data) => {
  const response = await db.Testimonial.update(data, {
    where: {
      id
    }
  });
  return response;
};

const remove = async (id) => {
  const response = await db.Testimonial.destroy({
    where: {
      id
    }
  });
  return response;
};

module.exports = {
  getAll,
  getById,
  getCount,
  create,
  update,
  remove
};
