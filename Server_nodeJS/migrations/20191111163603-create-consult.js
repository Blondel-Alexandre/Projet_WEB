'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Consults', {

    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Consults');
  }
};