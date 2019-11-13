'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Comments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Date_Comment: {
        allowNull: false,
        type: Sequelize.DATE
      },
      Author_Comment: {
        allowNull: false,
        type: Sequelize.STRING
      },
      Appreciation: {
        allowNull: false,
        type: Sequelize.STRING
      },
      Like_Comment: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      Public_Comment: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      Ref_Comment: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      Id_Person: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references:{
          model:'People',
          key: 'id',
        }
      },

    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Comments');
  }
};