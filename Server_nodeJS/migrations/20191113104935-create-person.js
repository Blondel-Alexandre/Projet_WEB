'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('People', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Name_Personne: {
        allowNull: false,
        type: Sequelize.STRING
      },
      First_Name_Person: {
        allowNull: false,
        type: Sequelize.STRING
      },
      Location_Person: {
        allowNull: false,
        type: Sequelize.STRING
      },
      Email_address: {
        allowNull: false,
        type: Sequelize.STRING
      },
      Password: {
        allowNull: false,
        type: Sequelize.STRING
      },
      Status_Person: {
        allowNull: false,
        type: Sequelize.STRING
      },
      Profile: {
        allowNull: false,
        type: Sequelize.STRING
      },
      Id_Basket: {
        allowNull: false,
        type: Sequelize.INTEGER ,
        reference :{
          model: 'Baskets',
          key: 'id'
        }
      },

    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('People');
  }
};