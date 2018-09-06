'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('severities', [
      { name: 'Critical' },
      { name: 'Major' },
      { name: 'Minor' }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('severities', null, {});
  }
};
