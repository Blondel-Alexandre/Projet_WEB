'use strict';
module.exports = (sequelize, DataTypes) => {
  const comments = sequelize.define('comments', {
    date: DataTypes.DATE,
    author: DataTypes.STRING,
    appreciation: DataTypes.STRING,
    like: DataTypes.BOOLEAN,
    public: DataTypes.BOOLEAN,
    ref: DataTypes.STRING,
    id_users: DataTypes.INTEGER
  }, {});
  comments.associate = function(models) {
    models.comments.belongsTo(models.users)
      };
  return comments;
};