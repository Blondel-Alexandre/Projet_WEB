'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('contains', {

      id_baskets: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'baskets',
          key: 'id',
        }

      },
      id_products: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'products',
          key: 'id',
        }
      },
      quantity: {
        allowNull: false,
        type: Sequelize.INTEGER
      },

    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('contains');
  }
};