'use strict';
module.exports = (sequelize, DataTypes) => {
  const Register = sequelize.define('Register', {
    test: DataTypes.STRING
  }, {});
  Register.associate = function(models) {
    models.Register.hasMany(models.Activity);
    models.Register.hasMany(models.Person);
  };
  return Register;
};