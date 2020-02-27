'use strict';
module.exports = (sequelize, DataTypes) => {
  class CoffeeOrder extends sequelize.Sequelize.Model {}

  CoffeeOrder.init({
    ammount: DataTypes.INTEGER,
    CoffeeId: DataTypes.INTEGER,
    OrderId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'CoffeeOrder'
  })
  CoffeeOrder.associate = function(models) {
    // associations can be defined here
    CoffeeOrder.belongsTo(models.Coffee)
    CoffeeOrder.belongsTo(models.Order)
  };
  return CoffeeOrder;
};