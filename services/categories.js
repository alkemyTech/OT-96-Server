const categoriesRepository = require("../repositories/categories");

//example:
/**
 const getAll = async () => {
        return  await categoriesRepository.getAll();
    }*/

const remove = async (id) => {
  return await categoriesRepository.remove(id);
};

module.exports = {
  remove,
};
