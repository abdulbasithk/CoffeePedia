'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('CoffeeCustomers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      CoffeeId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Coffees",
          key: "id"
        }
      },
      CustomerId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Customers",
          key: "id"
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('CoffeeCustomers');
  }
};