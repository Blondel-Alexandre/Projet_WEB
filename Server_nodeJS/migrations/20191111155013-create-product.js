'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Product', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Id_Product:{
        allowNull: false,
        type: Sequelize.INTEGER,
        reference :{
          model:'Product',
          key: 'id'
        }
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

    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Product');
  }
};