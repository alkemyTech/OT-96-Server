const newsModel = require('../models/news');

module.exports.getAll = async ( ) => {
    const response = await newsModel.findAll({
        include: [
            {
                model: db.Category,
            },
        ],
    });
    return response;
};

module.exports.getById = async ( id ) => {
    const response = await newsModel.findOne({
        where: { id }, include: [{ model: newsModel.Category }],
    });

    return response;
};

module.exports.create = async ( data ) => {
    const response = await newsModel.create({
        name: data.name,
        content: data.content,
        image: data.image,
        categoryId: data.categoryId
    })

    return response;
}

module.exports.update = async ( id, data ) => {
    const response = await newsModel.update({
        name: data.name,
        content: data.content,
        image: data.image,
        categoryId: data.categoryId
      },
      { where: { id } });
    
    return response;
}

module.exports.remove = async ( id ) => {
    const response = newsModel.destroy({ where: { id } });
    return response;
}