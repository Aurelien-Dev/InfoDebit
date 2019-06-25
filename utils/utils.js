var helpers = require('./helpers.js');
var dates = require('./dates.js');
var fs = require('./fs.js');

//Regroupe l'enssemble des utilitaires dans un module 
var utilitaires = {
    helpers: helpers,
    timestamp: dates,
    fileUtils: fs
}


module.exports = utilitaires