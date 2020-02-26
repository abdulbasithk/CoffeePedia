'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Coffees', [{
        name: 'Expresso Coffee',
        ammount: 200,
        price: 10000,
        StoreId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        name: 'Coffee Latte',
        ammount: 100,
        price: 15000,
        StoreId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        name: 'CoffeeMix',
        ammount: 50,
        price: 5000,
        StoreId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        name: 'Straberry Coffee',
        ammount: 20,
        price: 20000,
        StoreId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        name: 'Expresso Coffee',
        ammount: 200,
        price: 10000,
        StoreId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        name: 'Coffee Latte',
        ammount: 100,
        price: 15000,
        StoreId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        name: 'CoffeeMix',
        ammount: 50,
        price: 5000,
        StoreId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        name: 'Straberry Coffee',
        ammount: 20,
        price: 20000,
        StoreId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        name: 'Expresso Coffee',
        ammount: 200,
        price: 10000,
        StoreId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        name: 'Coffee Latte',
        ammount: 100,
        price: 15000,
        StoreId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        name: 'CoffeeMix',
        ammount: 50,
        price: 5000,
        StoreId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        name: 'Special Menu',
        ammount: 20,
        price: 20000,
        StoreId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
     return queryInterface.bulkDelete('Coffees', null, {});
  }
};
