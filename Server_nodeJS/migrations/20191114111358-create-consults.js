'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('consults', {

      id_activities: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'activities',
          key: 'id',
        }
      },
      id_users: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
          key: 'id',
        }
      },

    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('consults');
  }
};