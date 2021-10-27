const { Category } = require('../models/category');

// Get all categories
const getAll = async () => {
    const response = await Category.findAll({
        attributes: {
            exclude: ['description', 'deletedAt', 'createdAt', 'updatedAt'],
        }
    });

    return response;
}

// Get one category by id
const getById = async (id) => {
    const response = await Category.findByPk(id);

    return response;
}

// Insert new category
const create = async (data) => {
    const response = await Category.create(data);

    return response;
}

// Update category
const update = async (id, data) => {
    const response = await Category.update(data, {
        where: {
            id: id
        }
    });

    return response;
}

// Delete one category by id
const deleteById = async (id) => {
    const response = await Category.destroy({
        where: {
            id: id
        }
    });

    return response;
}

module.exports = {
    getAll,
    getById,
    create,
    update,
    deleteById
}