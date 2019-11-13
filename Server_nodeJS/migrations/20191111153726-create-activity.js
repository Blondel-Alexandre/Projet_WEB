'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Activity', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Id_Activity:{
        allowNull: false,
        type: Sequelize.INTEGER,
        reference :{
          model:'Activity',
          key: 'id'
        }
      },
      Name_Activity: {
        allowNull: false,
        type: Sequelize.STRING
      },
      Date_Activity: {
        allowNull: false,
        type: Sequelize.DATE
      },
      Description_Activity: {
        allowNull: false,
        type: Sequelize.STRING
      },
      Price_Activity: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      Location_Activity: {
        allowNull: false,
        type: Sequelize.STRING
      },
      Status_Activity: {
        allowNull: false,
        type: Sequelize.STRING
      },
      Regularity: {
        allowNull: false,
        type: Sequelize.STRING
      },
      Public_Activity: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },

    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Activity');
  }
};