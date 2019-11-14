'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('haves', {

      id_photos: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'photos',
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

    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('haves');
  }
};