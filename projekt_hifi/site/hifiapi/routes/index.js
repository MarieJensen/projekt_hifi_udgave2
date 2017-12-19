module.exports = (app) => { // module som require alle mine routes
    require('./produkter')(app); // require() er indbygget i Node.js for at indlæse moduler. require retunerer en værdi, afhængig af om module exposes bruger exports eller module.exports. 
    require('./sog')(app);
    require('./kontakt')(app);
    require('./login')(app);
    require('./users')(app);
    
};