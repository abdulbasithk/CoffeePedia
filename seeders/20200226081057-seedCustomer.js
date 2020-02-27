'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
    */
    return queryInterface.bulkInsert('Customers', [{
      username: 'abdulbasith',
      password: 'abdulbasith',
      email: 'abdulbasithkamaludin@gmail.com',
      money: 40000,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      username: 'xavier',
      password: 'xavier',
      email: 'xavier.thufail@gmail.com',
      money: 20000,
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
     return queryInterface.bulkDelete('Customers', null, {});
  }
};
