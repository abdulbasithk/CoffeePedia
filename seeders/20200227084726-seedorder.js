'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Orders', [{
      date: new Date(),
      CustomerId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      date: new Date(),
      CustomerId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      date: new Date(),
      CustomerId: 1,
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
     return queryInterface.bulkDelete('Orders', null, {});
  }
};