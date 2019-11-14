'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('comments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      date: {
        allowNull: false,
        type: Sequelize.DATE
      },
      author: {
        allowNull: false,
        type: Sequelize.STRING
      },
      appreciation: {
        allowNull: false,
        type: Sequelize.STRING
      },
      like: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      public: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      ref: {
        allowNull: false,
        type: Sequelize.STRING
      },
      id_users: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references:{
          model:'users',
          key: 'id',
        }
      },

    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('comments');
  }
};