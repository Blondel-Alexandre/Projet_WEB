'use strict';
module.exports = (sequelize, DataTypes) => {
  const consults = sequelize.define('consults', {
    id_activities: DataTypes.INTEGER,
    id_users: DataTypes.INTEGER
  }, {});
  consults.associate = function(models) {
    models.consults.belongsTo(models.activities);
    models.consults.belongsTo(models.users)
  };
  return consults;
};