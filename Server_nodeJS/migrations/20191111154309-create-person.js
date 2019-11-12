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
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('People');
  }
};