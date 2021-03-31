'use strict';
const faker = require('faker');
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        email: 'zhu@gmail.com',
        password: bcrypt.hashSync('password'),
        firstName: 'Steven',
        lastName: 'Zhu',
        profilePic: 'https://i.ibb.co/Kzsps1n/User-Zhu-profile-pic.jpg',
        artistName: 'Zhu',
        youtube: 'https://youtu.be/CVvJp3d8xGQ'
      },
      {
        email: 'odesza@gmail.com',
        password: bcrypt.hashSync('password'),
        firstName: 'Clayton',
        lastName: 'Knight',
        profilePic: 'https://i.ibb.co/8bSP4Y3/User-Odesza-profile-pic.jpg',
        artistName: 'Odesza',
        youtube: 'https://youtu.be/8ayH60ET4U0'
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {
      username: { [Op.in]: ['Demo-lition', 'FakeUser1', 'FakeUser2'] }
    }, {});
  }
};
