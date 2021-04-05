module.exports = {
    up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Events', [
        {
          eventType: 'Party',
          venueType: 'Rooftop',
          musicType: 'House',
          title: 'Housewarming Party on UES Rooftop',
          address: '210 E. 95th St. New York, NY 10128',
          size: 100,
          price: 1000,
          description: 'Cant wait to break in my new apartment with a summer rooftop party!',
          venueImageURL: '',
          userId: 1,
        },
        {
          eventType: 'Bar Night',
          venueType: 'Rooftop Bar',
          musicType: 'Live Performance',
          title: 'Summer Series Bar Night',
          address: '200 Bowrey New York, NY 10128',
          size: 200,
          price: 2000,
          description: 'First of our Summer Series live performances on our newly renovated courtyard.',
          venueImageURL: '',
          userId: 2,
        },
      ], {});
    },
