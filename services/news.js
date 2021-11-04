const newsRepository = require('../repositories/news');

const getById = async (id) => {
    const news = await newsRepository.getById(id);
    if (!news) {
        const error = new Error ('The request news was not found');
        error.status = 404;
        throw error;
    }
    return news;
}

module.exports = {
    getById,
};