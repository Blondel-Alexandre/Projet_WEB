'use strict';
module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define('users', {
    name: DataTypes.STRING,
    first_name: DataTypes.STRING,
    location: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    status: DataTypes.STRING,
    profile: DataTypes.STRING,
    id_baskets: DataTypes.INTEGER
  }, {});
  users.associate = function(models) {
    models.users.hasMany(models.comments);
    models.users.hasMany(models.baskets);
    models.users.hasMany(models.registers);
    models.users.hasMany(models.consults);
    models.users.hasMany(models.activities);
    models.users.hasMany(models.products);
    models.users.hasMany(models.photos);
    models.users.belongsTo(models.baskets)
  };
  return users;
};