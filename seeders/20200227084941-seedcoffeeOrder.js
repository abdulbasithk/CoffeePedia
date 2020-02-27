'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('CoffeeOrders', [{
      ammount: 4,
      CoffeeId: 1,
      OrderId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      ammount: 1,
      CoffeeId: 2,
      OrderId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      ammount: 3,
      CoffeeId: 3,
      OrderId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      ammount: 5,
      CoffeeId: 4,
      OrderId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      ammount: 2,
      CoffeeId: 2,
      OrderId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      ammount: 1,
      CoffeeId: 1,
      OrderId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
     return queryInterface.bulkDelete('CoffeeOrders', null, {});
  }
};
