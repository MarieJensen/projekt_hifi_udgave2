const mysql = require('mysql2');

module.exports = { // Her oprettes der forbindelse til databasen
    'connect': () => {
        return mysql.createConnection({
            'host': '188.226.158.18',
            'user': 'root',
            'password': 'holgermarie25',
            'database': 'hifi'
        });
    }
};