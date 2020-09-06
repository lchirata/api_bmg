'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('clientes',{
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      nome: DataTypes.STRING,
      cpf: DataTypes.STRING,
      email: DataTypes.STRING,
      telefone: DataTypes.STRING,
      empresa: DataTypes.STRING,
      cnpj: DataTypes.STRING,
      
    });
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
