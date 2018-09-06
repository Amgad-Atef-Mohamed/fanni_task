'use strict';
const models = require('../models/index.js');

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable(models.districts.tableName, models.districts.attributes);
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('districts');
  }
};