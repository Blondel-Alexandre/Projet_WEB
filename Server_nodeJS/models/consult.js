'use strict';
module.exports = (sequelize, DataTypes) => {
  const Consult = sequelize.define('Consult', {
    Id_Activity: DataTypes.INTEGER,
    Id_Person: DataTypes.INTEGER
  }, {});
  Consult.associate = function(models) {

     models.Consult.belongsTo(models.Activity);
    models.Consult.belongsTo(models.Person)
  };
  return Consult;
};