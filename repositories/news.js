const { News, Category } = require('../models/');

const getById = async ( id ) => {
    const response = await News.findByPk(id,{
        include: [{ 
          model: Category, as: "category"
        }],
    });

    return response;
};

module.exports = {
    getById,
};
