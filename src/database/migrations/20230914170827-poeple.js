'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable('People', {
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
      altura: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      peso: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      color_pelo: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      color_piel: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      ojos_color: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      ano_nacimiento: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      genero: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      mundo_natal: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      fecha_creacion: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      fecha_edicion: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      direccion_url: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.DATE.NOW,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.DATE.NOW,
      },
    });
  },

  async down(queryInterface) {
    return queryInterface.dropTable('Users');
  },
};
