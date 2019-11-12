'use strict';
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    Name_Product: DataTypes.STRING,
    Price_Product: DataTypes.INTEGER,
    Description_Product: DataTypes.STRING,
    Category_Product: DataTypes.STRING
  }, {});
  Product.associate = function(models) {
    models.Product.hasMany(models.Person);
  };
  return Product;
};