'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let members = [];

    for (let i = 100; i > members.length; i) {
      let member = {
        name: `Miembro${members.length}`,
        facebookUrl: 'http://miembro.com',
        instagramUrl: 'http://miembro.com',
        linkedinUrl: 'http://miembro.com',
        image: `image${members.length}`,
        createdAt: new Date(),
        updatedAt: new Date()
      };
      members.push(member);
    }
    await queryInterface.bulkInsert('Members', members, {});
  },

  down: async (queryInterface, Sequelize) => {
  }
};
