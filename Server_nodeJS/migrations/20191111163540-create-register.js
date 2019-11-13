'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Register', {

    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Register');
  }
};