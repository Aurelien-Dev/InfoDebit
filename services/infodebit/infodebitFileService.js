var config = require('../../config.js');
var Exception = require('handlebars');
var async = require('async');
var _ = require('underscore');

Array.prototype.forEach2 = function (a) {
	var l=this.length;
	for(var i=0;i<l;i++)a(this[i],i)
};

/**
 * Traitement permettant d'obtenir le débit d'une station
 * @param {int} numeroStation Numéro de la station de débit
 * @param {int} colonneIndexDebit Numéro de la colonne correspondant au débit
 * @param {function} callback function Waterfall
 */
function getData(numeroStation, colonneIndexDebit, callback) {
    /*
    ** Utilisation d'async afin de garder une cohérence et un ordre d'éxecution de tout les traitements asynchrones
    */
    async.waterfall([
        /**
         * Récupération d'un fichier pour une station
         */
        function (callback) {
            var data;
            var request = require("http").get(config.infoDebit.url + '?date=' + Date.now() + '&NoStation=' + numeroStation, function(response) {
                response.on('data', function(chunk) {
                    data += chunk;
                });
                response.on('end', function() {
                    callback(null, data);
                });
            });
            request.on('error', function(e) {
                throw Exception('Une erreur est arrivée lors du telechargement du fichier de station');
            });
        },
        /**
         * Traitement d'un fichier pour obtenir le dernier débit
         */
        function(data, callback) {
            var info = {
                date:'',
                debit:-1
            };

            if (!data.includes('<head>'))
            {
                if (colonneIndexDebit == "") colonneIndexDebit = 2;

                var currentData = data.toString().split(/(?:\r\n|\r|\n)/g);
                var ligneDebit = currentData[2].split(/(?:\t)/g);
                info.date = ligneDebit[0] + ' ' + ligneDebit[1];
                info.debit = parseFloat(ligneDebit[colonneIndexDebit].replace(",", "."));
            }

            callback(info);
        }
    ],
    /**
     * Retour de la donnée
     */
    function(ligneDebit) {
        callback(ligneDebit);
    })    
}



module.exports = { 
                    'obtenirDebitParStation': getData
                };