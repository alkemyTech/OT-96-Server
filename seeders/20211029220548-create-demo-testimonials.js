'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Testimonials',
      [
        {
          name: 'testimonio1',
          image: 'https://i.ytimg.com/vi/R-Oz2g3lo_E/maxresdefault.jpg',
          content: 'Estoy muy agradecido',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'testimonio2',
          image:
            'https://significado.net/wp-content/uploads/2015/03/Testimoniar-es-declarar-algo.jpg',
          content: 'Esta ONG me sirvió mucho',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Testimonials', null, {});
  },
};
