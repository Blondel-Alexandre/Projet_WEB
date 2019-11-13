'use strict';
module.exports = (sequelize, DataTypes) => {
  const Photo = sequelize.define('Photo', {
    Date_Photo: DataTypes.DATE,
    Author_Photo: DataTypes.STRING,
    Picture: DataTypes.STRING,
    Like_Photo: DataTypes.BOOLEAN,
    Public_Photo: DataTypes.BOOLEAN
  }, {});
  Photo.associate = function(models) {
    models.Photo.hasMany(models.Person);

    models.Photo.belongsTo(models.Have,{
      foreignKey: {
        allowNull: false
      }
    })
  };
  return Photo;
};