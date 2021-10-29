const activitiesService = require('../services/activities');

//example:
/**
const getAll = async (req, res, next) => {
    try {
        const response = await activitiesService.getAll();

        res.send(response);
    } catch (error) {
        next(error);
    }
}

module.exports = {
    getAll
}
 */
