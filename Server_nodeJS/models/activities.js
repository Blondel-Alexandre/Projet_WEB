'use strict';
module.exports = (sequelize, DataTypes) => {
  const activities = sequelize.define('activities', {
    name: DataTypes.STRING,
    date: DataTypes.DATE,
    description: DataTypes.STRING,
    price: DataTypes.BOOLEAN,
    location: DataTypes.STRING,
    status: DataTypes.STRING,
    regularity: DataTypes.STRING,
    public: DataTypes.BOOLEAN,
    id_users: DataTypes.INTEGER
  }, {});
  activities.associate = function(models) {
    models.activities.hasMany(models.consults);
    models.activities.hasMany(models.registers);
    models.activities.belongsTo(models.users)

  };
  return activities;
};