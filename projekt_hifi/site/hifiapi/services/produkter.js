// servicen har brug for database adgang
const mysql = require('mysql2');
const db = require('../config/sql').connect();
db.connect((err) => {
   if (err) {
      console.log(Date(), err.stack);
      return;
   }
});

