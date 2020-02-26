'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Stores', [{
      name: 'Fore Coffee',
      location: 'Jl. Jend. Sudirman No.Kav 25, Kuningan, Karet, Setia Budi, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12920',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Starbuck Coffee',
      location: 'Mayapada Tower, Jl. Jend. Sudirman No.Kav. 27, RW.2, Kuningan, Karet Kuningan, Setiabudi, South Jakarta City, Jakarta 12920',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Kopi Kenangan',
      location: 'Sahid Food StrEAT Sahid City, Jl. Jend. Sudirman, RT.10/RW.11, Karet Tengsin, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10220',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Stores', null, {});
  }
};
