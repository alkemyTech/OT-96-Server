const { News } = require('../models');

const getAll = async () => {
  const response = await News.findAll({
    include: [
      {
        model: db.Category,
      },
    ],
  });
  return response;
};

const getById = async (id) => {
  const response = await News.findOne({
    where: { id },
    include: [{ model: News.Category }],
  });

  return response;
};

const create = async (data) => {
  const news = await News.create(data);
  return news;
};

const update = async (id, data) => {
  const response = await News.update(
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
  const response = News.destroy({ where: { id } });
  return response;
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};
