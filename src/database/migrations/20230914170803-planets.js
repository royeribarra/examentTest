'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable('Planets', {
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
      periodo_rotacion: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      periodo_orbita: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      diametro: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      clima: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      gravedad: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      terreno: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      superficie_agua: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      poblacion: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      fecha_edicion: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      fecha_creacion: {
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
    return queryInterface.dropTable('Planets');
  },
};
