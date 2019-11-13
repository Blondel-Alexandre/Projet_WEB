'use strict';
module.exports = (sequelize, DataTypes) => {
  const Contain = sequelize.define('Contain', {
    Id_Basket: DataTypes.INTEGER,
    Id_Product: DataTypes.INTEGER,
    Quantity: DataTypes.INTEGER
  }, {});
  Contain.associate = function(models) {

    models.Contain.belongsTo(models.Basket)

    models.Contain.belongsTo(models.Product)
  };
  return Contain;
};