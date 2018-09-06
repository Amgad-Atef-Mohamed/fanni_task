'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('districts', [
      { name: 'Azizia', city_id: 1 },
      { name: 'khalidia', city_id: 2 }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('districts', null, {});
  }
};
