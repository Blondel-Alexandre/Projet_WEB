'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Registers', {

      Id_Activity: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Activities',
          key: 'id',
        },
      },
      Id_Person: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'People',
          key: 'id',
        },
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Registers');
  }
};