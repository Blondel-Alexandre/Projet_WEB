'use strict';
module.exports = (sequelize, DataTypes) => {
  const registers = sequelize.define('registers', {
    id_activities: DataTypes.INTEGER,
    id_users: DataTypes.INTEGER
  }, {});
  registers.associate = function(models) {
    models.consults.belongsTo(models.activities,{
      foreignKey:{
        allowNull: false
      }
    });
    models.consults.belongsTo(models.users,{
      foreignKey:{
        allowNull: false
      }
    })
  };
  return registers;
};