"use strict";

const description = `Our Purpose is to move the world forward. We take action by building community, protecting our planet and increasing access to sport. Learn more about our progress in our FY21 Impact Report.`;
const [createdAt, updatedAt] = [new Date(), new Date()];
module.exports = {
  async up(queryInterface, Sequelize) {
    return await queryInterface.bulkInsert("Products", [
      {
        id: 1,
        title: "Nike Dunk High Retro",
        slug: "nike-mens-dunk-high-retro",
        price: 102.36,
        is_published: true,
        description,
        createdAt,
        updatedAt,
      },
      {
        id: 2,
        title: "Air Jordan 4 Retro SE",
        slug: "nike-mens-air-jordan-4-retro-se",
        price: 210.56,
        is_published: true,
        description,
        createdAt,
        updatedAt,
      },
    ]);
  },
  async down(queryInterface, Sequelize) {
    return await queryInterface.bulkDelete("Products", null, {});
  },
};
