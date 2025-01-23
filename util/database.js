// util/database.js
const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'Authentication',
  password: 'Emp#136M'
});

module.exports = pool.promise();

const db = require('../util/database');

module.exports = class Product {
  constructor(id, title, imageUrl, description, price) {
    this.id = id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  static fetchAll() {
    return db.execute('SELECT * FROM products');
  }
};
