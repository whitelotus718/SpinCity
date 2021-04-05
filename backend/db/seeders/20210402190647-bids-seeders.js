'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('Bids', [
      {
        eventId: 1,
        userId: 1,
        date: '4.2.2021',
        isAccepted: true,
      },
      {
        eventId: 1,
        userId: 2,
        date: '4.4.2021',
        isAccepted: false,
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Bids', null, {});
  }
};
