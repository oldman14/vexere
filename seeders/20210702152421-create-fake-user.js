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
      "users",
      [
        {
          name: "Dev quen",
          email: "ngoc111@gmail.com",
          password: "123456",
          numberPhone: "0332425253",
          avatar:
            "https://s3-ap-southeast-1.amazonaws.com/images.spiderum.com/sp-images/c97e29e0bdf411ea80a6f3f2c55386e8.jpg",
          type: "ADMIN",
          createdAt: "2021-06-28 19:07:51",
          updatedAt: "2021-06-29 19:07:51",
        },
        {
          name: "Dev ngon",
          email: "ngon111@gmail.com",
          password: "123456",
          numberPhone: "0332425253",
          avatar:
            "https://s3-ap-southeast-1.amazonaws.com/images.spiderum.com/sp-images/c97e29e0bdf411ea80a6f3f2c55386e8.jpg",
          type: "ADMIN",
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
     await queryInterface.bulkDelete('users', null, {});
  },
};
