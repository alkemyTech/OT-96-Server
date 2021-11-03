const contactsService = require('../services/contacts');

//example:
/**
const getAll = async (req, res, next) => {
    try {
        const response = await contactsService.getAll();

        res.send(response);
    } catch (error) {
        next(error);
    }
} 

module.exports = {
     getAll,
     getById,
     create,
     update,
     remove
}
 */
