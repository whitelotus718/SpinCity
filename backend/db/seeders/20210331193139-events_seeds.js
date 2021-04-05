'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Events', [
      {
        eventType: 'Party',
        venueType: 'Rooftop',
        musicType: 'House',
        title: "Celebrating Minhaj's 27th Birthday",
        address: '210 East 95th Street New York, NY 10128',
        size: 125,
        price: 1000,
        description: 'Gathering friends and family to celebrate 27 rotations around the sun.',
        venueImage: 'https://i.ibb.co/wyVMrKr/Search-Result-1-party-at-rooftop.jpg',
        userId: 1
      },
      {
        eventType: 'Wedding',
        venueType: 'Field',
        musicType: 'Ambient',
        title: "Celebrating the love of Michael and Mary",
        address: 'Douglaston Manor',
        size: 100,
        price: 800,
        description: 'Would love to have a wonderful ambient musician to set the vibe on our special day.',
        venueImage: 'https://i.ibb.co/wyyjLnp/Search-Result-2-wedding-at-field.jpg',
        userId: 2
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Events', null, {});
  }
};
