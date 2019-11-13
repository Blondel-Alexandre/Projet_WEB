'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Haves', {

      Id_Photo: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Photos',
          key: 'id',
        },
      },
      Id_Product: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Products',
          key: 'id',
        }
      }

    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Haves');
  }
};