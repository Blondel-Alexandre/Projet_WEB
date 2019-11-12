'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Photos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Date_Photo: {
        allowNull: false,
        type: Sequelize.DATE
      },
      Author_Photo: {
        allowNull: true,
        type: Sequelize.STRING
      },
      Picture: {
        allowNull: false,
        type: Sequelize.STRING
      },
      Like_Photo: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      Public_Photo: {
        allowNull: false,
        type: Sequelize.BOOLEAN
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
    return queryInterface.dropTable('Photos');
  }
};