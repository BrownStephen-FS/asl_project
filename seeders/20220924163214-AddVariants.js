"use strict";
// Reusable Description
const description =
  "Our Purpose is to move the world forward. We take action by building community, protecting our planet and increasing access to sport. Learn more about our progress in our FY21 Impact Report.";
const [createdAt, updatedAt] = [new Date(), new Date()];
module.exports = {
  async up(queryInterface, Sequelize) {
    return await queryInterface.bulkInsert("Variants", [
      {
        id: 1,
        title: "Blue",
        slug: "blue",
        description,
        price: 102.36,
        productId: 1,
        inventory: 2,
        createdAt,
        updatedAt,
      },
      {
        id: 2,
        title: "Red",
        slug: "red",
        description,
        price: 105.36,
        productId: 1,
        inventory: 24,
        createdAt,
        updatedAt,
      },
      {
        id: 3,
        title: "Grey",
        slug: "grey",
        description,
        price: 210.56,
        productId: 2,
        inventory: 1,
        createdAt,
        updatedAt,
      },
      {
        id: 4,
        title: "Black",
        slug: "black",
        description,
        price: 215.56,
        productId: 2,
        inventory: 10,
        createdAt,
        updatedAt,
      },
    ]);
  },
  async down(queryInterface, Sequelize) {
    return await queryInterface.bulkDelete("Variants", null, {});
  },
};
