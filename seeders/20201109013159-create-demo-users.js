'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          firstName: 'Usuario',
          lastName: 'Demo',
          email: 'test@test.com',
          password:
            '$2a$10$4hVG5w2RMM.P0ST64W2qC.jlrIaq7W09oTOwEq.UqxQ1vDZmaoaja', // password: 12345678
          roleId: 1,
          photo:
            'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
