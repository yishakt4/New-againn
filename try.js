console.log('name is rango');

console.log('name');


const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'nodecomplete', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;