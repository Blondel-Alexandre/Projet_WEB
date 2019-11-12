'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    Date_Comment: DataTypes.DATE,
    Author_Comment: DataTypes.STRING,
    Appreciation: DataTypes.STRING,
    Like_Comment: DataTypes.BOOLEAN,
    Public_Comment: DataTypes.BOOLEAN,
    Ref_Comment: DataTypes.INTEGER
  }, {});
  Comment.associate = function(models) {
    models.Comment.hasMany(models.Person);
  };
  return Comment;
};