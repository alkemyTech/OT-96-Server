const slidesRepository = require('../repositories/slides');
const imageUploader = require('./imageUploader');

const getAll = async () => {
  const slides = await slidesRepository.getAll();
  if (slides.length == 0) {
    const error = new Error('No hay slides');
    error.status = 404;
    throw error;
  }
  return slides;
};
const getById = async (id) => {
  const slide = await slidesRepository.getById(id);
  if (!slide) {
    const error = new Error('El slide no existe');
    error.status = 404;
    throw error;
  }
  return slide;
};

const create = async ({ imageUrl, text, order, organizationId }) => {
  if (!order) {
    const slides = await slidesRepository.getAll();
    let orderId = 0;
    slides.forEach((slide) => {
      if (slide.dataValues.order > orderId) {
        orderId = slide.dataValues.order;
      }
    });
    order = orderId + 1;
  }

  const image = Buffer.from(imageUrl, 'base64');
  const { url } = await imageUploader.upload(image);
  return await slidesRepository.create({
    imageUrl: url,
    text,
    order,
    organizationId
  });
};

const update = async (id, { imageUrl, text, order, organizationId }) => {
  const slide = await slidesRepository.getById(id);
  if (!slide) {
    const error = new Error('El slide no existe');
    error.status = 404;
    throw error;
  }
  return await slidesRepository.update(id, {
    imageUrl,
    text,
    order,
    organizationId
  });
};

const remove = async (id) => {
  const slide = await slidesRepository.getById(id);
  if (!slide) {
    const error = new Error('El slide no existe');
    error.status = 404;
    throw error;
  }
  return await slidesRepository.remove(id);
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove
};
