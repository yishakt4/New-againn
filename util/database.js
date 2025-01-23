// util/database.js
const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'Emp#136y',
  database: 'Authentication'
});


module.exports = pool;

// database.js
async function getProducts() {
    const [rows, fields] = await pool.execute('SELECT * FROM products');
    return rows;
}

module.exports = {
    getProducts
};

