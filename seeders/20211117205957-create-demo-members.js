'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let members = [
      {
        name: `Manuel`,
        facebookUrl: 'http://manuel.com',
        instagramUrl: 'http://manuel.com',
        linkedinUrl: 'http://manuel.com',
        image: `Manuelimage`,
        description: 'description',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: `Alexis`,
        facebookUrl: 'http://alexis.com',
        instagramUrl: 'http://alexis.com',
        linkedinUrl: 'http://alexis.com',
        image: `image`,
        description: 'description',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: `Francisco`,
        facebookUrl: 'http://francisco.com',
        instagramUrl: 'http://francisco.com',
        linkedinUrl: 'http://francisco.com',
        image: `image`,
        description: 'description',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: `Federico`,
        facebookUrl: 'http://federico.com',
        instagramUrl: 'http://federico.com',
        linkedinUrl: 'http://federico.com',
        image: `image`,
        description: 'description',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: `Juan Cruz`,
        facebookUrl: 'http://JuanCruz.com',
        instagramUrl: 'http://JuanCruz.com',
        linkedinUrl: 'http://JuanCruz.com',
        image: `image`,
        description: 'description',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: `Agustin`,
        facebookUrl: 'http://Agustin.com',
        instagramUrl: 'http://Agustin.com',
        linkedinUrl: 'http://Agustin.com',
        image: `image`,
        description: 'description',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: `Ivan Gabriel`,
        facebookUrl: 'http://IvanGabriel.com',
        instagramUrl: 'http://IvanGabriel.com',
        linkedinUrl: 'http://IvanGabriel.com',
        image: `image`,
        description: 'description',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: `Matias`,
        facebookUrl: 'http://Matias.com',
        instagramUrl: 'http://Matias.com',
        linkedinUrl: 'http://Matias.com',
        image: `image`,
        description: 'description',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ];
    await queryInterface.bulkInsert('Members', members, {});
  },

  down: async (queryInterface, Sequelize) => {}
};
