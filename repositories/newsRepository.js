const db = require('../models');

module.exports.getAll = async ( ) => {
    const response = await db.News.findAll({
        include: [
            {
                model: db.Category,
            },
        ],
    });
    return response;
};

module.exports.getById = async ( id ) => {
    const response = await db.News.findOne({
        where: { id }, include: [{ model: db.Category }],
    });

    return response;
};

module.exports.create = async ( data ) => {
    const response = await db.News.create({
        name: data.name,
        content: data.content,
        image: data.image,
        categoryId: data.categoryId
    })

    return response;
}

module.exports.update = async ( id, data ) => {
    const response = await db.News.update({
        name: data.name,
        content: data.content,
        image: data.image,
        categoryId: data.categoryId
      },
      { where: { id } });
    
    return response;
}

module.exports.delete = async ( id ) => {
    const response = db.News.destroy({ where: { id } });
    return response;
}