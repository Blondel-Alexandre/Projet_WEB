'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Have', {

    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Have');
  }
}