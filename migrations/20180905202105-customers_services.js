'use strict';
const models = require('../models/index.js');
module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable(models.customers_services.tableName, models.customers_services.attributes);
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('users_services');
  }
};
