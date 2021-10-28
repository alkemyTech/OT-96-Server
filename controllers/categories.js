const categoriesService = require('../services/categories');

//example:
/**
const getAll = async (req, res, next) => {
    try {
        const response = await categoriesService.getAll();

        res.send(response);
    } catch (error) {
        next(error);
    }
} 

module.exports = {
    getAll
}
 */