'use strict';
module.exports = (sequelize, DataTypes) => {
  const Have = sequelize.define('Have', {
    Id_Photo: DataTypes.INTEGER,
    Id_Product: DataTypes.INTEGER
  }, {});
  Have.associate = function(models) {

    models.Have.belongsTo(models.Photo)

    models.Have.belongsTo(models.Product)

  };
  return Have;
};