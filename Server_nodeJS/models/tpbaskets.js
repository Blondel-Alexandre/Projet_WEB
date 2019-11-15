'use strict';
module.exports = (sequelize, DataTypes) => {
  const tpbaskets = sequelize.define('tpbaskets', {
    date: DataTypes.DATE,
    status: DataTypes.STRING
  }, {});
  tpbaskets.associate = function(models) {
    // associations can be defined here
  };
  return tpbaskets;
};