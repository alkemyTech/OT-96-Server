const db = require('../models');

// Get all categories
const getAll = async () => {
    const categories = await db.Category.findAll();
    return categories;
}

// Get one category by id
const getById = async (id) => {
    const response = await db.Category.findByPk(id);

    return response;
}

// Insert new category
const create = async (data) => {
    const response = await db.Category.create(data);

    return response;
}

// Update category
const update = async (id, data) => {
    const response = await db.Category.update(data, {
        where: {
            id: id
        }
    });

    return response;
}

// Remove one category by id
const remove = async (id) => {
    const response = await db.Category.destroy({
        where: {
            id: id
        }
    });

    return response;
}

const getAllNames = async () => {
    const categories = await db.Category.findAll({
        attributes: {
            exclude: ['description', 'image', 'deletedAt', 'createdAt', 'updatedAt'],
        }
    });
    return categories;
}

module.exports = {
    getAll,
    getById,
    create,
    update,
    remove,
    getAllNames
}