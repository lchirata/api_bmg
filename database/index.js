const Sequelize = require('sequelize');
const dbConfigs = require('./configs');
 
const Cliente = require('../models/Cliente');

const connection = new Sequelize(dbConfigs);
 

Cliente.init(connection);

module.exports = connection;
