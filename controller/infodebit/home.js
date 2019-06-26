/// <reference path="../../typings/express/express.d.ts" />
/// <reference path="../../typings/underscore/underscore.d.ts" />

var config = require('../../config.js');
var express = require('express');
var router = express.Router();

/*
** Affichage d'accueil
*/
router.get('/', function (request, response) {
	response.render('infodebit/home', 
	{
		rivieres: config.infoDebit.rivieres
	});
});

module.exports = router;