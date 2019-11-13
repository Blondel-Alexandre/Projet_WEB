'use strict';
module.exports = (sequelize, DataTypes) => {
  const Basket = sequelize.define('Basket', {
    Date_Basket: DataTypes.DATE,
    Status_Basket: DataTypes.BOOLEAN
  }, {});
  Basket.associate = function(models) {
    models.Basket.hasMany(models.Person);


    models.Basket.belongsTo(models.Person,{
      foreignKey: {
        allowNull: false
      }
    })

    models.Basket.belongsTo(models.Contain,{
      foreignKey: {
        allowNull: false
      }
    })
  };
  return Basket;
};