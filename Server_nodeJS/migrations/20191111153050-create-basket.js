'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Basket', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Id_Basket:{
        allowNull: false,
        type: Sequelize.INTEGER,
        reference :{
          model:'Basket',
          key: 'id'
        }
      },
      Date_Basket: {
        allowNull: false,
        type: Sequelize.DATE
      },
      Status_Basket: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },

    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Basket');
  }
};