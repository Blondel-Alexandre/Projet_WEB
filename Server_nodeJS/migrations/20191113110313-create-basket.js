'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Baskets', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Date_Basket: {
        allowNull: false,
        type: Sequelize.DATE
      },
      Status: {
        allowNull: false,
        type: Sequelize.BOOLEAN
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
    return queryInterface.dropTable('Baskets');
  }
};