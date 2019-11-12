'use strict';
module.exports = (sequelize, DataTypes) => {
  const Person = sequelize.define('Person', {
    Name_Person: DataTypes.STRING,
    First_Name_Person: DataTypes.STRING,
    Location_Person: DataTypes.STRING,
    Email_Person: DataTypes.STRING,
    Password: DataTypes.STRING,
    Status_Person: DataTypes.STRING,
    Profile: DataTypes.STRING
  }, {});
  Person.associate = function(models) {
    models.Person.hasMany(models.Basket);


  };
  return Person;
};