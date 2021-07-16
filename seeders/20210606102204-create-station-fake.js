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
      "stations",
      [
        {
          name: "Ben xe Mien Tay",
          address: "392 Dinh Bo Linh ",
          province: "HCM",
          createdAt: "2021-03-26 07:06:14",
          updatedAt: "2021-03-26 07:08:14"
        },
        {
          name: "Ben xe BMT",
          address: "392 Buon Me Thuat ",
          province: "BMT",
          createdAt: "2021-03-26 07:10:14",
          updatedAt: "2021-03-26 07:11:14"
        },
        {
          name: "Ben xe Ha Noi",
          address: "392 Ba Dinh ",
          province: "HN",
          createdAt: "2021-03-26 07:10:14",
          updatedAt: "2021-03-26 07:11:14"
        },
        {
          name: "Ben xe Mien Dong",
          address: "392 Binh Thanh ",
          province: "HCM",
          createdAt: "2021-03-26 07:10:14",
          updatedAt: "2021-03-26 07:11:14"
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
     await queryInterface.bulkDelete('stations', null, {});
  },
};
