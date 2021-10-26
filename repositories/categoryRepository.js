const Category = require('../models/category');

// example:
const getAll = async () => {
    const response = await Category.findAll({
        attributes: {
            exclude: ['description', 'deletedAt', 'createdAt', 'updatedAt'],
        }
    });
}

module.exports = {
    getAll
}