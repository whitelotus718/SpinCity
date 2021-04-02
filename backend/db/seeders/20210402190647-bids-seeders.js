'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Bids', [
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

  down: (queryInterface, Sequelize) => {
    
  }
};
