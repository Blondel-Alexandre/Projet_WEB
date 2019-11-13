'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Contains', {

      Id_Basket: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Baskets',
          key: 'id',
        }
      },
      Id_Product: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Products',
          key: 'id',
        }
      },
      Quantity: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Contains');
  }
};