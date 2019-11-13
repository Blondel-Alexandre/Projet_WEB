'use strict';
module.exports = (sequelize, DataTypes) => {
  const Photo = sequelize.define('Photo', {
    Date_Photo: DataTypes.DATE,
    Author_Photo: DataTypes.STRING,
    Picture: DataTypes.STRING,
    Public_Photo: DataTypes.BOOLEAN,
    Like_Photo: DataTypes.BOOLEAN,
    Id_Person: DataTypes.INTEGER
  }, {});
  Photo.associate = function(models) {
    models.Photo.hasMany(models.Have);
    models.Photo.belongsTo(models.Person)
  };
  return Photo;
};