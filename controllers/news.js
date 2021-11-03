const newsService = require('../services/news');


const getAll = async (req, res, next) => {

};

const getById = async (req, res, next) => {

};

const create = async (req, res, next) => {

};

const update = async (req, res, next) => {

};

const remove = async (req, res, next) => {
    try {
        const { id } = req.params;
        await newsService.remove(id);
        res.status(200).json({ message: 'the news was delete succesfully!' });
    } catch(error) {
        next(error);
    }
};

module.exports = {
    getAll,
    getById,
    create,
    update,
    remove,
}



