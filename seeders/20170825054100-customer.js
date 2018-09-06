'use strict';
module.exports = {
  up:  async function (queryInterface, Sequelize) {

    return await queryInterface.bulkInsert('customers', [{
      first_name: 'fanni app',
      last_name: 'fanni app',
      email: 'fanni app@fanni.com'
    }], {});
  },

  down: async function (queryInterface, Sequelize) {

    return await queryInterface.bulkDelete('customers', null, {});
  }
};
