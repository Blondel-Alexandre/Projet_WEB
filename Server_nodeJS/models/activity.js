'use strict';
module.exports = (sequelize, DataTypes) => {
  const Activity = sequelize.define('Activity', {
    Name_Activity: DataTypes.STRING,
    Date_Activity: DataTypes.DATE,
    Description_Activity: DataTypes.STRING,
    Price_Activity: DataTypes.BOOLEAN,
    Location_Activity: DataTypes.STRING,
    Status_Activity: DataTypes.STRING,
    Regularity: DataTypes.STRING,
    Public_Activity: DataTypes.BOOLEAN
  }, {});
  Activity.associate = function(models) {
    models.Activity.hasMany(models.Person);
  };
  return Activity;
};