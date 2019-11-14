'use strict';
module.exports = (sequelize, DataTypes) => {
  const products = sequelize.define('products', {
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    description: DataTypes.STRING,
    categorie: DataTypes.STRING,
    id_users: DataTypes.INTEGER
  }, {});
  products.associate = function(models) {
    models.products.hasMany(models.contains);
    models.products.hasMany(models.haves);
    models.products.belongsTo(models.users,{
      foreignKey:{
        allowNull: false
      }
    })
  };
  return products;
};