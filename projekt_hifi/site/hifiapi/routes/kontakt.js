
const db = require('../config/sql').connect(); // connect med database, require() er indbygget i Node.js for at indlæse moduler. require retunerer en værdi, afhængig af om module exposes bruger exports eller module.exports.

module.exports = function (app) { // betyder at andre filer kan hente funktionen vha. req

    app.post('/create', function (req, res) { // selve routet som har post metoden

        let navn = req.body.navn; // variabel som går ind i html og finder id'et navn
        let email = req.body.email; // variabel som går ind i html og finder id'et email
        let besked = req.body.besked; // variabel som går ind i html og finder id'et besked


        console.log(navn);
        console.log(email);
        console.log(besked);

        // variabel som indeholder sql sætning
        let sql = `INSERT INTO formular(id, navn, email, besked, opret) VALUES (null, ?,?,?, CURRENT_TIMESTAMP)`;

        // db.query tager fat i variablen sql ovenover og siger at det er værdierne navn, email og besked i databasen som der er tale om
        db.query(sql, [navn, email, besked], function (err, data) {

            if (err) {
                console.log(err);
            } else {
                res.send("Ok");
            }
        })

    });
}