const categoriesService = require('../services/categories');

const getAll = async (req, res, next) => {
    try {
        const categories = await categoriesService.getAll();
        res.status(200).json(categories);
    } catch (error) {
        next(error);
    }
} 

module.exports = {
    getAll
}
