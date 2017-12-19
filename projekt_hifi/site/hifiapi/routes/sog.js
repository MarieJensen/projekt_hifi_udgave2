const db = require('../config/sql').connect(); // connect med database, //require() er indbygget i Node.js for at indlæse moduler. require retunerer en værdi, afhængig af om module exposes bruger exports eller module.exports.
module.exports = function (app) { // betyder at andre filer kan hente funktionen vha. req
    app.get('/produkter/sog/:id', function (req, res, id) { // API med route, selve routet er /produkter som har get metoden. Alt inden i {} er en del af API'et
        db.query(`SELECT *, fk_kategori_id AS type FROM produkter INNER JOIN kategori ON produkter.fk_kategori_id = kategori.id where navn LIKE "%${req.params.id}%"`, function (err, data) {
            res.send(data);
        })
    });
}
