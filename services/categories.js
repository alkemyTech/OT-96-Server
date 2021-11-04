const categoriesRepository = require('../repositories/categories');

 const getAll = async () => {
    const news = await categoriesRepository.getAll();
    if (!news) {
        const error = new Error('no news found');
        error.status = 404;
        throw error;
    }
    return news;
}

module.exports = {
    getAll
};
