'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Consult', {

    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Consult');
  }
};