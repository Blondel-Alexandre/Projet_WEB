'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Comment', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Id_Comment:{
        allowNull: false,
        type: Sequelize.INTEGER,
        reference :{
          model:'Comment',
          key: 'id'
        }
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

    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Comment');
  }
};