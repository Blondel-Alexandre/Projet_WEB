'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Name_Product: {
        allowNull: false,
        type: Sequelize.STRING
      },
      Price_Product: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      Description_Product: {
        allowNull: false,
        type: Sequelize.STRING
      },
      Category_Product: {
        allowNull: false,
        type: Sequelize.STRING
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
    return queryInterface.dropTable('Products');
  }
};