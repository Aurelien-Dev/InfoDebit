var Riviere = require('../../models/infodebit/Riviere.js');
var _ = require('underscore');


/*	Constructeur	*/ 
function Secteur(nom)
{
	/*	Membres	*/ 
	this.nom = nom;
	this.rivieres = [];
}



/*	Méthodes	*/
Secteur.prototype.toString = function() {
	return Secteur.prototype.nom;
}


Secteur.prototype.AddRiviere = function(_riviereNom) {
	this.rivieres.push(_riviereNom);
}


Secteur.prototype.GetRiviere = function(_riviereName) {
	var filter = _.filter(this.rivieres, function(riviere) {
		return riviere.nom == _riviereName;
	});

	return _.first(filter);
}



module.exports = Secteur