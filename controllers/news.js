const newsService = require('../services/news');

const getById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const news = await newsService.getById(id);
        res.status(200).json(news);
    } catch (error) {
        next(error);
    }

};

module.exports = {
    getById,
};

