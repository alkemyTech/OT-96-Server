const newsModel = require('../models/news');

const getAll = async () => {
  const response = await newsModel.findAll({
    include: [
      {
        model: db.Category,
      },
    ],
  });
  return response;
};

const getById = async (id) => {
  const response = await newsModel.findOne({
    where: { id },
    include: [{ model: newsModel.Category }],
  });

  return response;
};

const create = async (data) => {
  const news = await newsModel.create(data);
  return news;
};

const update = async (id, data) => {
  const response = await newsModel.update(
    {
      name: data.name,
      content: data.content,
      image: data.image,
      categoryId: data.categoryId,
    },
    { where: { id } }
  );

  return response;
};

const remove = async (id) => {
  const response = newsModel.destroy({ where: { id } });
  return response;
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};
