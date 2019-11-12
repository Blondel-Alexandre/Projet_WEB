'use strict';
module.exports = (sequelize, DataTypes) => {
  const Basket = sequelize.define('Basket', {
    Date_Basket: DataTypes.DATE,
    Status_Basket: DataTypes.BOOLEAN
  }, {});
  Basket.associate = function(models) {
    models.Basket.hasMany(models.Person);
  };
  return Basket;
};