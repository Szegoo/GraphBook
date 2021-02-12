'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Posts', [{
      text: 'Ovo je prvi post',
      createdAt: new Date(),
      updatedat: new Date(),
    },
    {
      text: 'Ovo je drugi post',
      createdAt: new Date(),
      updatedat: new Date(),
    }
  ], { })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Posts', null, {});
  }
};
