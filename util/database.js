const mysql = require('mysql2');

db.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Connected to the database');
  }
});

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Emp#136y',
  database: 'Authentication'
});

const [rows, fields] = await db.execute('SELECT * FROM products');
console.log(rows);