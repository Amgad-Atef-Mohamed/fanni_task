'use strict';
const models = require('../models/index.js');

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable(models.severities.tableName, models.severities.attributes);
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('severities');
  }
};