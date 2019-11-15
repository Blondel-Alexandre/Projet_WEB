'use strict';
module.exports = (sequelize, DataTypes) => {
  const tpproducts = sequelize.define('tpproducts', {
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    description: DataTypes.STRING,
    category: DataTypes.STRING,
    email: DataTypes.STRING
  }, {});
  tpproducts.associate = function(models) {
    // associations can be defined here
  };
  return tpproducts;
};