'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Registers', {

    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Registers');
  }
};