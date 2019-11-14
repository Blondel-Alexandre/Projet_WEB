'use strict';
module.exports = (sequelize, DataTypes) => {
  const baskets = sequelize.define('baskets', {
    date: DataTypes.DATE,
    status: DataTypes.BOOLEAN,
    id_users: DataTypes.INTEGER
  }, {});
  baskets.associate = function(models) {
    models.baskets.hasMany(models.contains);
    models.baskets.belongsTo(models.users)
  };
  return baskets;
};