'use strict';
module.exports = (sequelize, DataTypes) => {
  const Basket = sequelize.define('Basket', {
    Date_Basket: DataTypes.DATE,
    Status: DataTypes.BOOLEAN,
    Id_Person: DataTypes.INTEGER
  }, {});
  Basket.associate = function(models) {
    models.Basket.hasMany(models.Person);
    models.Basket.hasMany(models.Contain);
    models.Basket.belongsTo(models.Person)
  };
  return Basket;
};