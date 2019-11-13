'use strict';
module.exports = (sequelize, DataTypes) => {
  const Activity = sequelize.define('Activity', {
    Name_Activity: DataTypes.STRING,
    Date_Activity: DataTypes.STRING,
    Description_Activity: DataTypes.STRING,
    Price_Activity: DataTypes.BOOLEAN,
    Location_Activity: DataTypes.STRING,
    Status_Activity: DataTypes.STRING,
    Regularity: DataTypes.STRING,
    Public_Activity: DataTypes.BOOLEAN,
    Id_Person: DataTypes.INTEGER
  }, {});
  Activity.associate = function(models) {
    models.Activity.hasMany(models.Consult);
    models.Activity.hasMany(models.Register);
    models.Activity.belongsTo(models.Person)

  };
  return Activity;
};