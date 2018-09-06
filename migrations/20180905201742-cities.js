'use strict';
const models = require('../models/index.js');

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.createTable(models.cities.tableName, models.cities.attributes);

  },

  down: (queryInterface, Sequelize) => {
    queryInterface.dropTable('cities');
  }
};
