const { Activity } = require('../models/activity');

// Get all activities
const getAll = async () => {
    const response = await Activity.findAll({
        attributes: {
            exclude: ['content', 'deletedAt', 'createdAt', 'updatedAt'],
        }
    });

    return response;
}

// Get one activity by id
const getById = async (id) => {
    const response = await Activity.findByPk(id);

    return response;
}

// Insert new activity
const create = async (data) => {
    const response = await Activity.create(data);

    return response;
}

// Update activity
const update = async (id, data) => {
    const response = await Activity.update(data, {
        where: {
            id: id
        }
    });

    return response;
}

// Delete one activity by id
const deleteById = async (id) => {
    const response = await Activity.destroy({
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
