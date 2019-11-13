'use strict';
module.exports = (sequelize, DataTypes) => {
  const Person = sequelize.define('Person', {
    Name_Personne: DataTypes.STRING,
    First_Name_Person: DataTypes.STRING,
    Location_Person: DataTypes.STRING,
    Email_address: DataTypes.STRING,
    Password: DataTypes.STRING,
    Status_Person: DataTypes.STRING,
    Profile: DataTypes.STRING,
    Id_Basket: DataTypes.INTEGER
  }, {});
  Person.associate = function(models) {
    models.Person.hasMany(models.Comment);
    models.Person.hasMany(models.Basket);
    models.Person.hasMany(models.Register);
    models.Person.hasMany(models.Consult);
    models.Person.hasMany(models.Activity);
    models.Person.hasMany(models.Product);
    models.Person.hasMany(models.Photo);
    models.Person.belongsTo(models.Basket)
  };
  return Person;
};