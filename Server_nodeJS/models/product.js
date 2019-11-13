'use strict';
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    Name_Product: DataTypes.STRING,
    Price_Product: DataTypes.INTEGER,
    Description_Product: DataTypes.STRING,
    Category_Product: DataTypes.STRING,
    Id_Person: DataTypes.INTEGER
  }, {});
  Product.associate = function(models) {
    models.Product.hasMany(models.Contain);
    models.Product.hasMany(models.Have);
    models.Product.belongsTo(models.Person,{
      foreignKey:{
        allowNull: false
      }
    })
  };
  return Product;
};