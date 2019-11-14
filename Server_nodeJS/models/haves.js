'use strict';
module.exports = (sequelize, DataTypes) => {
  const haves = sequelize.define('haves', {
    id_photos: DataTypes.INTEGER,
    id_products: DataTypes.INTEGER
  }, {});
  haves.associate = function(models) {
    models.haves.belongsTo(models.baskets);

    models.haves.belongsTo(models.products)
  };
  return haves;
};