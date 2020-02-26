'use strict';
module.exports = (sequelize, DataTypes) => {
  class Store extends sequelize.Sequelize.Model {}

  Store.init({
    name: DataTypes.STRING,
    location: DataTypes.STRING
  }, {
    sequelize,
  })
  Store.associate = function(models) {
    Store.hasMany(models.Coffee)
  };
  return Store;
};