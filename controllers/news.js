const newsService = require('../services/news');


const getAll = async (req, res, next) => {

};

const getById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const news = await newsService.getById(id);
        res.status(200).json(news);
    } catch (error) {
        next(error);
    }

};

const create = async (req, res, next) => {

};

const update = async (req, res, next) => {

};

const remove = async (req, res, next) => {
    
};

module.exports = {
    getAll,
    getById,
    create,
    update,
    remove,
}


