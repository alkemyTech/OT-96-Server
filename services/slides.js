const slidesRepository = require('../repositories/slides');
const organizationsRepository = require('../repositories/organizations');
const imageUploader = require('./imageUploader');

const getAll = async () => {
  const slides = await slidesRepository.getAll();
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

const create = async ({ imageUrl: image, text, order, organizationId }) => {
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

  const imageBuffer = Buffer.from(image, 'base64');
  const { key } = await imageUploader.upload(imageBuffer);
  const newSlide = await slidesRepository.create({
    imageUrl: `http://localhost:3000/images/${key}`,
    text,
    order,
    organizationId
  });
  return { newSlide, key };
};

const update = async (id, { imageUrl, text, order, organizationId }) => {
  const slide = await slidesRepository.getById(id);

  if (!slide) {
    const error = new Error(`The slide id ${id} doesn't exists!`);
    error.status = 404;
    throw error;
  } else {
    await slidesRepository.update(id, {
      imageUrl,
      text,
      order,
      organizationId
    });
    return await slidesRepository.getById(id);
  }
  if (organizationId) {
    const organization = await organizationsRepository.findById(organizationId);
    if (!organization) {
      const error = new Error(
        `The organization id ${organizationId} doesn't exists!`
      );
      error.status = 404;
      throw error;
    }
  }
  if (organizationId) {
    const organization = await organizationsRepository.findById(organizationId);
    if (!organization) {
      const error = new Error(
        `The organization id ${organizationId} doesn't exists!`
      );
      error.status = 404;
      throw error;
    }
  }
  await slidesRepository.update(id, {
    imageUrl,
    text,
    order,
    organizationId
  });

  const updatedSlide = await slidesRepository.getById(id);

  return updatedSlide;
};

const remove = async (id) => {
  const slide = await slidesRepository.getById(id);
  if (!slide) {
    const error = new Error(`The slide id ${id} doesn't exists!`);
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
