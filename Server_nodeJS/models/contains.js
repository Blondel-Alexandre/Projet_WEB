'use strict';
module.exports = (sequelize, DataTypes) => {
  const contains = sequelize.define('contains', {
    id_baskets: DataTypes.INTEGER,
    id_products: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER
  }, {});
  contains.associate = function(models) {
    models.contains.belongsTo(models.baskets);
    models.contains.belongsTo(models.products)
  };
  return contains;
};