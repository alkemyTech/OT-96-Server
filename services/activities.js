const activitiesRepository = require('../repositories/activities');

const create = async ({ name, content, image }) => {
  const res = await activitiesRepository.getByName(name);
  if (res) {
    const error = new Error(`Activity ${name} already exists`);
    error.status = 400;
    throw error;
  }
  return await activitiesRepository.create({ name, content, image });
};
module.exports = {
  create,
};
