'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkInsert('CoffeeCustomers', [{
        CoffeeId: 1,
        CustomerId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        CoffeeId: 2,
        CustomerId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        CoffeeId: 3,
        CustomerId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        CoffeeId: 5,
        CustomerId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        CoffeeId: 6,
        CustomerId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        CoffeeId: 8,
        CustomerId: 2,
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
     return queryInterface.bulkDelete('CoffeeCustomers', null, {});
  }
};
