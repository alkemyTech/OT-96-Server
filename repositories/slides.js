const { Slide } = require('../models/slide');

async function getAll() {
  const Slide = await Slide.findAll();
  return Slide;
}

async function getById(id) {
  const Slide = await Slide.findOne({
    where: {
      id: id,
    },
  });
  return Slide;
}

async function create(data) {
  const Slide = await Slide.create({
    name: data.name,
    image: data.image,
    address: data.address,
    phone: data.phone,
    email: data.email,
    welcomeText: data.welcomeText,
    aboutUsText: data.aboutUsText,
  });
  return Slide;
}

async function update(id, data) {
  const values = {
    name: data.name,
    image: data.image,
    address: data.address,
    phone: data.phone,
    email: data.email,
    welcomeText: data.welcomeText,
    aboutUsText: data.aboutUsText,
  };
  const condition = {
    where: {
      id: id,
    },
  };
  const Slide = await Slide.update(values, {
    ...condition,
  });
  return Slide;
}

async function remove(id) {
  const Slide = await Slide.destroy({
    where: {
      id: id,
    },
  });
  return Slide;
}

module.exports = { getAll, getById, create, update, remove };
