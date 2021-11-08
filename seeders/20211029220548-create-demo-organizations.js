'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Organizations',
      [
        {
          name: 'Admin',
          image: 'image',
          address: 'contenido',
          phone: 1122334455,
          email: 'alexis10893@hotmail.com',
          welcomeText: 'hola',
          aboutUsText: 'somos una organizacion',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Organizations', null, {});
  },
};
