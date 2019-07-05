/// <reference path="../../typings/express/express.d.ts" />
/// <reference path="../../typings/underscore/underscore.d.ts" />

var config = require('../../config.js');
var express = require('express');
var router = express.Router();
var infodebitService = require('../../services/infodebit/infodebitFileService');

/*
** Affichage d'accueil
*/
router.get('/', function (request, response) {
	response.render('infodebit/home', 
	{
		rivieres: config.infoDebit.rivieres
	});
	// infodebitService.obtenirToutLesDebits(config.infoDebit.rivieres, function() {
	// });
});

module.exports = router;