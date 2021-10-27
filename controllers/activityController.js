const activityRepo = require('../repositories/activityRepository');

//example:
const getAll = async (req, res, next) => {
    try {
        const response = await activityRepo.getAll();

        res.send(response);
    } catch (error) {
        next(error);
    }
}

module.exports = {
    getAll
}