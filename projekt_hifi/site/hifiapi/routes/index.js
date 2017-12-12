module.exports = (app) => { // module som require alle mine routes
    require('./produkter')(app);
    require('./sog')(app);
    require('./kontakt')(app);
    require('./login')(app);
    require('./users')(app);
    
};