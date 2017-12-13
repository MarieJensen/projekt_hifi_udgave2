const mysql = require('mysql2');

module.exports = { // connect med database
    'connect': () => {
        return mysql.createConnection({
            'host': '188.226.158.18',
            'user': 'root',
            'password': 'holgermarie25',
            'database': 'hifi'
        });
    }
};