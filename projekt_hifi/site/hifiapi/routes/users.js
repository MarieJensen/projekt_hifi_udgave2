const db = require('../config/sql').connect(); // connect med database, //require() er indbygget i Node.js for at indlæse moduler. require retunerer en værdi, afhængig af om module exposes bruger exports eller module.exports.
const security = require('../services/security'); // konstant som tager fat i services mappen hvor security filen er

module.exports = (app) => { // betyder at andre filer kan hente funktionen vha. req
    app.get('/users', security.isAuthenticated, (req, res, next) => { // API med route, selve routet er /users som har get metoden. Alt inden i {} er en del af API'et
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



