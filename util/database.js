const mysql = require('mysql2');

db.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Connected to the database');
  }
});


