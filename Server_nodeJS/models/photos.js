'use strict';
module.exports = (sequelize, DataTypes) => {
  const photos = sequelize.define('photos', {
    date: DataTypes.DATE,
    author: DataTypes.STRING,
    picture: DataTypes.STRING,
    public: DataTypes.BOOLEAN,
    like: DataTypes.BOOLEAN,
    id_users: DataTypes.INTEGER
  }, {});
  photos.associate = function(models) {
    models.photos.hasMany(models.haves);
    models.photos.belongsTo(models.users)
  };
  return photos;
};