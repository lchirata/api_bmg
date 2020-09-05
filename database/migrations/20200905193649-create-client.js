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
      nome:Sequelize.STRING,
      cpf:Sequelize.STRING,
      email:Sequelize.STRING,
      telefone:Sequelize.STRING,
      empresa: DataTypes.STRING,
      cnpj: DataTypes.STRING
      
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
