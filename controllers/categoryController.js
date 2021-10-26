const categoryRepo = require('../repositories/categoryRepository');

//example:
const getAll = async (req, res, next) => {
    try {
        const response = await categoryRepo.getAll();

        res.send(response);
    } catch (error) {
        next(error);
    }
}

module.exports = {
    getAll
}