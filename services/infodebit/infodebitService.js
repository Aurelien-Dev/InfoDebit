/// <reference path="../../models/infodebit/InfodebitManager.js" />

var InfodebitManager = require('../../models/infodebit/InfodebitManager.js');
var _ = require('underscore');

function getData(callback) {
    var yqlNode = require('yql-node');
    var yql = yqlNode.formatAsJSON(); //will return JSON results 
    var yqlWithOAuth = yqlNode.formatAsJSON().withOAuth('dj0yJmk9OGo2U0lZTU51WnlOJmQ9WVdrOU5IZHJlbkZLTXpJbWNHbzlNQS0tJnM9Y29uc3VtZXJzZWNyZXQmeD0yZQ--','4f2bd63218e9290e98a78a0850aa58112004ae7f'); //returns JSON 
    var query = "select * from html where url='http://www.canot-kayak.qc.ca/info_debit/infodebitV3.html?cache=" + Date.now() + "' and xpath='//body/center/table[@frame=\"border\"]/tbody/tr'";
 
    //returns JSON 
    yql.execute(query, function(error, data){
        // response.json({ success: data });
        callback(traiterFlux(JSON.parse(data)));
    });
}

function traiterFlux(json) {
    if (json.query.count > 0) {

        var elementSkipper = -1;

        var manager = new InfodebitManager();
        var currentSecteur = '';        

        _.each(json.query.results.tr, function(row, i) {
            if (i == elementSkipper) return; // On skip cet élément car c'est l'entête


            if (!Array.isArray(row.td)) {                
                elementSkipper = i + 1;
                //if (i != 0) manager.AddSecteur(secteur);
                manager.AddSecteur(row.td.font.content);
                currentSecteur = row.td.font.content;
            } else {
                //Col 1 = rivière
                var riviereName = row.td[0].font.a.font.content.trim();
                //Col 2 = section
                var sectionName = row.td[1].font.content.trim();
                //Col 3 = débit
                var debit       = parseFloat(row.td[2].font.content.trim());
                //Col 6 = prévision
                var prevision   = parseFloat(row.td[5].font.a.font.content.trim());
                //Col 8 = heure de mise à jour
                var maj         = row.td[7].font.content.trim();
                
                console.log('New section');
                manager.AddSection(currentSecteur, riviereName, sectionName, debit, prevision, maj);
                
            }
        });

        return manager.secteurs;
    }
}


module.exports = { 'obtenirDebit': getData };