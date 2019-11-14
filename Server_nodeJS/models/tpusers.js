'use strict';
module.exports = (sequelize, DataTypes) => {
  const tpusers = sequelize.define('tpusers', {
    name: DataTypes.STRING,
    first_name: DataTypes.STRING,
    location: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    status: DataTypes.STRING,
    profile: DataTypes.STRING
  }, {});
  tpusers.associate = function(models) {
    // associations can be defined here
  };
  return tpusers;
};