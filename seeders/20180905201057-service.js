'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('services', [
      { name: 'Electric', description: 'Electric' },
      { name: 'Air Condition', description: 'Air Condition' },
      { name: 'Water', description: 'Water' }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('cities', null, {});
  }
};
