'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('cities', [
      { name: 'Meccah' },
      { name: 'Riyadh' },
      { name: 'Jeddah' }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('cities', null, {});
  }
};
