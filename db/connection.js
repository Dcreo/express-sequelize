let Sequelize = require('sequelize');
let config = require('../config/config');

let sequelize = new Sequelize(config.development.database, config.development.username, config.development.password, {
  host: 'localhost',
  dialect: 'postgres'
});

sequelize
  .authenticate()
  .then(() => console.log('Connection established'))
  .catch(err => console.error('Connection error: ', err));

module.exports = sequelize;
