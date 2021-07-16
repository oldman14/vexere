"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    await queryInterface.bulkInsert(
      "trips",
      [
        {
          fromStation: 1,
          toStation: 2,
          startTime: "2021-06-13 08:00:00",
          price: 200000,
          createdAt: "2021-06-27 19:07:51",
          updatedAt: "2021-06-25 19:07:51",
        },
        {
          fromStation: 3,
          toStation: 4,
          startTime: "2021-06-13 08:00:00",
          price: 150000,
          createdAt: "2021-06-27 19:07:51",
          updatedAt: "2021-06-25 19:07:51",
        },
        {
          fromStation: 1,
          toStation: 4,
          startTime: "2021-06-13 08:00:00",
          price: 250000,
          createdAt: "2021-06-27 19:07:51",
          updatedAt: "2021-06-25 19:07:51",
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete("trips", null, {});
  },
};
