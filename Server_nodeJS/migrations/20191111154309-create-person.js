'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Person', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Id_Person:{
        allowNull: false,
        type: Sequelize.INTEGER,
        reference :{
          model:'Person',
          key: 'id'
        }
      },
      Name_Person: {
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
      Email_Person: {
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

    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Person');
  }
};