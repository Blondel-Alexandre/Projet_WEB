'use strict';
module.exports = (sequelize, DataTypes) => {
  const tpcomments = sequelize.define('tpcomments', {
    date: DataTypes.DATE,
    author: DataTypes.STRING,
    appreciation: DataTypes.STRING,
    like: DataTypes.BOOLEAN,
    public: DataTypes.BOOLEAN,
    ref: DataTypes.INTEGER,
    email: DataTypes.STRING
  }, {});
  tpcomments.associate = function(models) {
    // associations can be defined here
  };
  return tpcomments;
};