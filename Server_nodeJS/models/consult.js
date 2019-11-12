'use strict';
module.exports = (sequelize, DataTypes) => {
  const Consult = sequelize.define('Consult', {
    test: DataTypes.STRING
  }, {});
  Consult.associate = function(models) {
    models.Consult.hasMany(models.Person);
    models.Consult.hasMany(models.Activity);
  };
  return Consult;
};