'use strict';
module.exports = (sequelize, DataTypes) => {
  const tpphotos = sequelize.define('tpphotos', {
    date: DataTypes.DATE,
    author: DataTypes.STRING,
    picture: DataTypes.STRING,
    public: DataTypes.BOOLEAN,
    like: DataTypes.BOOLEAN,
    email: DataTypes.STRING
  }, {});
  tpphotos.associate = function(models) {
    // associations can be defined here
  };
  return tpphotos;
};