const newsRepository = require('../repositories/news');

const getAll = async () => {
    
}

const getById = async (id) => {

}

const create = async (data) => {

}

const update = async (id, data) => {

}

const remove = async (id) => {
    const news = await newsRepository.getById(id);
    if (!news) {
        const error = new Error('The request news was not found');
        error.status = 404;
        throw error;
    }
    return await newsRepository.remove(id);
}

module.exports = {
    getAll,
    getById,
    create,
    update,
    remove
}