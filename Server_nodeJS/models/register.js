'use strict';
module.exports = (sequelize, DataTypes) => {
  const Register = sequelize.define('Register', {
    Id_Activity: DataTypes.INTEGER,
    Id_Person: DataTypes.INTEGER
  }, {});
  Register.associate = function(models) {
    models.Consult.belongsTo(models.Activity,{
      foreignKey:{
        allowNull: false
      }
    });
    models.Consult.belongsTo(models.Person,{
      foreignKey:{
        allowNull: false
      }
    })
  };
  return Register;
};