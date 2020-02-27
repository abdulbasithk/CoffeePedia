'use strict';
const makeKey = require('../helpers/makeKey')

module.exports = (sequelize, DataTypes) => {
  class Order extends sequelize.Sequelize.Model {}

  Order.init({
    date: DataTypes.DATE,
    orderKey: DataTypes.STRING,
    status: DataTypes.STRING,
    CustomerId: DataTypes.INTEGER,
  }, {
    hooks: {
      beforeCreate(Order, options) {
        Order.orderKey = makeKey()
        Order.status = 'Process'
      }
    },
    sequelize,
    modelName: 'Order'
  })
  Order.associate = function(models) {
    Order.belongsTo(models.Customer)
    Order.belongsToMany(models.Coffee, { through: models.CoffeeOrder })
  };
  return Order;
};