'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Haves', {

    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Haves');
  }
};