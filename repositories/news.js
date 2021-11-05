const { News, Category } = require('../models');

const getAll = async () => {
    const response = await News.findAll({
        include: [
            {
                model: Category,
            },
        ],
    });
    return response;
};

const getById = async ( id ) => {
    const response = await News.findByPk(id,{
        include: [{ 
          model: Category, as: "category"
        }],
    });

    return response;
};

const create = async (data) => {
  const response = await News.create(data);
  return response;
};

const update = async (data, id) => {
  const response = await News.update(data, {
    where: {
      id,
    },
  });
  return response;
};

const remove = async (id) => {
  const response = await News.destroy({
    where: {
      id,
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
