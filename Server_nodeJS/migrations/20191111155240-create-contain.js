'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Contain', {

      Quantity: {
        allowNull: false,
        type: Sequelize.INTEGER
      },

    })     ;
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Contain');
  }
};