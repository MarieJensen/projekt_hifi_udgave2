const db = require('../config/sql').connect(); // connect med database
const security = require('../services/security');

module.exports = (app) => { // betyder at andre filer kan hente funktionen vha. req
    app.get('/users', security.isAuthenticated, (req, res, next) => { // selve routet som har get metoden
        db.query('SELECT id, username FROM users', (error, rows) => {
            res.send(rows);
        });
    });

    app.get('/getUser', security.isAuthenticated, (req, res, next) => {
        db.query('SELECT username FROM users where id = ?', req.header('userID'), (error, rows) => {
            res.send(rows);
        });
    });
};



