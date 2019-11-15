'use strict';
module.exports = (sequelize, DataTypes) => {
  const tpactivities = sequelize.define('tpactivities', {
    name: DataTypes.STRING,
    date: DataTypes.DATE,
    description: DataTypes.STRING,
    price: DataTypes.BOOLEAN,
    location: DataTypes.STRING,
    status: DataTypes.STRING,
    regularity: DataTypes.STRING,
    public: DataTypes.STRING,
    email: DataTypes.STRING
  }, {});
  tpactivities.associate = function(models) {
    // associations can be defined here
  };
  return tpactivities;
};