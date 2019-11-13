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

    models.Person.belongsTo(models.Basket,{
      foreignKey: {
        allowNull: false
      }
    })

    models.Person.belongsTo(models.Comment,{
      foreignKey: {
        allowNull: false
      }
    })

    models.Person.belongsTo(models.Product,{
      foreignKey: {
        allowNull: false
      }
    })

    models.Person.belongsTo(models.Activity,{
      foreignKey: {
        allowNull: false
      }
    })

    models.Person.belongsTo(models.Register,{
      foreignKey: {
        allowNull: false
      }
    })

    models.Person.belongsTo(models.Consult,{
      foreignKey: {
        allowNull: false
      }
    })

    models.Person.belongsTo(models.Photo,{
      foreignKey: {
        allowNull: false
      }
    })
  };
  return Person;
};