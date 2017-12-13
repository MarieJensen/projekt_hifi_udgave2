const db = require('../config/sql').connect(); // connect med database
const passwordHash = require('password-hash');
const crypto = require('crypto');


module.exports = (app) => { // betyder at andre filer kan hente funktionen vha. req
    
    app.post('/login', (req, res) => { // selve routet som har post metoden
        if (req.body.password !== '' && req.body.username !== '') {
            console.log(passwordHash.generate(req.body.password));
            db.execute('SELECT id, password FROM users WHERE username = ?', [req.body.username], (selError, rows) => {
                if (passwordHash.verify(req.body.password, rows[0].password)) {
                    crypto.randomBytes(256, (err, buf) => {
                        if (err) return res.json(500);
                        else {
                            const token = buf.toString('hex');
                            db.execute('INSERT INTO accesstokens SET userid = ?, token = ?', [rows[0].id, token], (insError) => {
                                if (insError) return res.json(500);
                                else return res.send({ "ID": rows[0].id, "AccessToken": token });
                            });
                        }
                    });
                } else {
                    res.send(401);
                }
            });
        } else {
            res.send(401);
        }
    });
};

