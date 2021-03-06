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
      "tickets",
      [
        {
          trip_id: 2,
          user_id: 1,
          createdAt: "2021-06-27 19:07:51",
          updatedAt: "2021-06-25 19:07:51",
        },
        {
          trip_id: 1,
          user_id: 2,
          createdAt: "2021-06-24 19:07:51",
          updatedAt: "2021-06-29 19:07:51",
        },
        {
          trip_id: 3,
          user_id: 2,
          createdAt: "2021-06-28 19:07:51",
          updatedAt: "2021-06-29 19:07:51",
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
     await queryInterface.bulkDelete('tickets', null, {});
  },
};
