'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('tpcomments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      date: {
        type: Sequelize.DATE
      },
      author: {
        type: Sequelize.STRING
      },
      appreciation: {
        type: Sequelize.STRING
      },
      like: {
        type: Sequelize.BOOLEAN
      },
      public: {
        type: Sequelize.BOOLEAN
      },
      ref: {
        type: Sequelize.INTEGER
      },
      email: {
        type: Sequelize.STRING
      },

    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('tpcomments');
  }
};