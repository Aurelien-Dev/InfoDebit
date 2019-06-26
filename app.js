/// <reference path="./typings/node/node.d.ts" />
/// <reference path="./typings/express/express.d.ts" />
/// <reference path="./typings/express-handlebars/express-handlebars.d.ts" />

//Définition dse modules
var express = require('express');
var utils = require('./utils/utils.js');
var expressHandle = require('express-handlebars');


var app = module.exports = express();
app.set('port', process.env.PORT || 3000);


var hbs = expressHandle.create({
						layoutsDir: 'views/infodebit/layout/',
						defaultLayout: 'main',
						helpers: utils.helpers.helpers
					});

//définition du moteur de rendu (ici handlebars)
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

//Ouverture d'un dossier public
app.use(express.static('public/infodebit'));

var apiController = require('./controller/infodebit/api');
app.use(apiController);

var iutController = require('./controller/infodebit/home');
app.use(iutController);


//Création sur serveur web
var server = app.listen(app.get('port'), function() {
    console.log(new Date().toLocaleString() + ' - Express started on port ' + app.get('port'));
});