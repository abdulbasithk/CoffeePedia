'use strict';
module.exports = (sequelize, DataTypes) => {
  class Order extends sequelize.Sequelize.Model {}

  Order.init({
    date: DataTypes.DATE,
    CustomerId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Order'
  })
  Order.associate = function(models) {
    // associations can be defined here
    Order.belongsTo(models.Customer)
    Order.belongsToMany(models.Coffee, { through: models.CoffeeOrder })
  };
  return Order;
};