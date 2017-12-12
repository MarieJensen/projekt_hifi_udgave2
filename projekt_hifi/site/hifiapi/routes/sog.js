const db = require('../config/sql').connect();
module.exports = function (app) { // betyder at andre filer kan hente funktionen vha. req
    app.get('/produkter/sog/:id', function (req, res, id) { // selve routet som har get metoden
        db.query(`SELECT *, fk_kategori_id AS type FROM produkter INNER JOIN kategori ON produkter.fk_kategori_id = kategori.id where navn LIKE "%${req.params.id}%"`, function (err, data) {
            res.send(data);
        })
    });
}
