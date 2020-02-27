'use strict';
module.exports = (sequelize, DataTypes) => {
  class Coffee extends sequelize.Sequelize.Model {}

  Coffee.init({
    name: DataTypes.STRING,
    ammount: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    StoreId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Coffee'
  })
  Coffee.associate = function(models) {
    // associations can be defined here
    Coffee.belongsTo(models.Store)
    Coffee.belongsToMany(models.Order, { through: models.CoffeeOrder })
  };
  return Coffee;
};