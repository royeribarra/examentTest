'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable('Films', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        unique: true,
        primaryKey: true,
      },
      nombre: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      peopleId: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      planetId: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
    });
  },

  async down(queryInterface) {
    return queryInterface.dropTable('Films');
  },
};
