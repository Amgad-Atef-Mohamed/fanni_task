'use strict';
const models = require('../models/index.js');

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable(models.services.tableName, models.services.attributes);
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('services');
  }
};