'use strict';
module.exports = (sequelize, DataTypes) => {
  const Contain = sequelize.define('Contain', {
    Quantity: DataTypes.INTEGER
  }, {});
  Contain.associate = function(models) {
    models.Contain.hasMany(models.Basket);
    models.Contain.hasMany(models.Product);
  };
  return Contain;
};