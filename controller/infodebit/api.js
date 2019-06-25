/// <reference path="../../typings/express/express.d.ts" />
/// <reference path="../../typings/underscore/underscore.d.ts" />


var infodebitService = require('../../services/infodebit/infodebitFileService');
var express = require('express');
var router = express.Router();

/*
** 
*/
router.get('/api/infodebit/:idStation', function (request, response) {
	infodebitService.obtenirDebitParStation(request.params.idStation, function (result) {
		response.json({ success: true, result: result });
	});
});



module.exports = router;