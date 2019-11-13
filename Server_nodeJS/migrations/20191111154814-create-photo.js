'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Photo', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Id_Photo:{
        allowNull: false,
        type: Sequelize.INTEGER,
        reference :{
          model:'Photo',
          key: 'id'
        }
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

    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Photo');
  }
};