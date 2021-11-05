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

const update = async (id, { name, content, image }) => {
  console.log(id, { name, content, image });

  const res = await activitiesRepository.getById(id);
  if (!res) {
    const error = new Error(`Activity ${id} doesen't exists`);
    error.status = 404;
    throw error;
  }
  return await activitiesRepository.update(id, { name, content, image });
};

module.exports = {
  create,
  update,
};
