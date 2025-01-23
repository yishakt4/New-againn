// util/database.js
const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'Emp#136y',
  database: 'Authentication'
});


module.exports = pool;

const db = mysql.createConnection({
  
// database.js
async function getProducts() {
    const [rows, fields] = await db.execute('SELECT * FROM products');
    return rows;
}

module.exports = {
    getProducts
};

