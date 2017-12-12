
const db = require('../config/sql').connect();

module.exports = function (app) { // betyder at andre filer kan hente funktionen vha. req

    app.post('/create', function (req, res) { // selve routet som har post metoden

        let navn = req.body.navn;
        let email = req.body.email;
        let besked = req.body.besked;


        console.log(navn);
        console.log(email);
        console.log(besked);

        let sql = `INSERT INTO formular(id, navn, email, besked, opret) VALUES (null, ?,?,?, CURRENT_TIMESTAMP)`;

        db.query(sql, [navn, email, besked], function (err, data) {

            if (err) {
                console.log(err);
            } else {
                res.send("Ok");
            }
        })

    });
}