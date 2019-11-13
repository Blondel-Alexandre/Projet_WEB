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
        allowNull: false,
        type: Sequelize.STRING
      },
      Picture: {
        allowNull: false,
        type: Sequelize.STRING
      },
      Public_Photo: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      Like_Photo: {
        allowNull: false,
        type: Sequelize.BOOLEAN
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
    return queryInterface.dropTable('Photos');
  }
};