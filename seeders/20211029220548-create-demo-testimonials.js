'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('testimonials', [{
      name: 'testimonio1',
      image: 'https://i.ytimg.com/vi/R-Oz2g3lo_E/maxresdefault.jpg',
      content: 'Estoy muy agradecido'
    },
    {
      name: 'testimonio2',
      image: 'https://significado.net/wp-content/uploads/2015/03/Testimoniar-es-declarar-algo.jpg',
      content: 'Esta ONG me sirvió mucho'
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('testimonials', null, {});
  }
};
