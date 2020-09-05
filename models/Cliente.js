const Model = require ('sequelize').Model;
const DataTypes = require('sequelize').DataTypes;

class Cliente extends Model {
    static init (connection){
            super.init({
                nome: DataTypes.STRING,
                cpf: DataTypes.STRING,
                email: DataTypes.STRING,
                telefone: DataTypes.STRING,
                empresa: DataTypes.STRING,
                cnpj: DataTypes.STRING,
            }, {
                sequelize: connection
            })
        }
    } 

module.exports = Cliente;
