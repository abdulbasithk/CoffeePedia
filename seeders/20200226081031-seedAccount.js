'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
     return queryInterface.bulkInsert('Accounts', [{
       username: "admin",
       password: "admin",
       email: "coffeepedia.hacktiv8@gmail.com",
       role: true,
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
     return queryInterface.bulkDelete('Accounts', null, {});
  }
};
