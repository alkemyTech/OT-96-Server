'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Organizations',
      [
        {
          name: 'Somos Más',
          image: 'image',
          address: 'contenido',
          phone: 1160112988,
          email: 'somosfundacionmas@gmail.com',
          welcomeText: 'Bienvenido a Somos Más',
          aboutUsText: `Desde 1997 en Somos Más trabajamos con los chicos y chicas, mamás y papás,
          abuelos y vecinos del barrio La Cava generando procesos de crecimiento y de
          inserción social. Uniendo las manos de todas las familias, las que viven en el barrio y
          las que viven fuera de él, es que podemos pensar, crear y garantizar estos procesos.`,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Organizations', null, {});
  }
};
