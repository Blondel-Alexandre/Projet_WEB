'use strict';
module.exports = (sequelize, DataTypes) => {
  const Have = sequelize.define('Have', {
    test: DataTypes.STRING
  }, {});
  Have.associate = function(models) {
    models.Have.hasMany(models.Person);
    models.Have.hasMany(models.Photo);

  };
  return Have;
};