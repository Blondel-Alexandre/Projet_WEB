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


    models.Product.belongsTo(models.Contain,{
      foreignKey: {
        allowNull: false
      }
    })

    models.Product.belongsTo(models.Have,{
      foreignKey: {
        allowNull: false
      }
    })
  };
  return Product;
};