'use strict';
module.exports = (sequelize, DataTypes) => {
  class CoffeeCustomer extends sequelize.Sequelize.Model {}

  CoffeeCustomer.init({
    CoffeeId: DataTypes.INTEGER,
    CustomerId: DataTypes.INTEGER
  }, {
    sequelize,
  })
  CoffeeCustomer.associate = function(models) {
    // associations can be defined here
  };
  return CoffeeCustomer;
};