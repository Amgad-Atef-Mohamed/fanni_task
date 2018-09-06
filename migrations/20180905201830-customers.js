'use strict';
const models = require('../models/index.js');

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable(models.customers.tableName, models.customers.attributes);
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('customers');
  }
};