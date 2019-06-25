var Secteur = require('../../models/infodebit/Secteur.js');
var Riviere = require('../../models/infodebit/Riviere.js');
var Section = require('../../models/infodebit/Section.js');
var _ = require('underscore');

/*	Constructeur	*/
function InfodebitManager() {
	
	/*	Membres	*/ 
	this.secteurs = [];
}


/*	
** Méthodes Add 
*/
InfodebitManager.prototype.AddSecteur = function(_nom)  {
	var secteur = this.GetSecteur(_nom);
	if (secteur == null) {
		this.secteurs.push(new Secteur(_nom)); 
	} else {
		console.log('Section existante');
	}
	
}

InfodebitManager.prototype.AddSection = function(_secteurNom, _riviereNom, _sectionNom, _debit, _prevision, _maj) {
	var secteur = this.GetSecteur(_secteurNom);
	if (secteur != null) {
		var riviere = secteur.GetRiviere(_riviereNom);
		if(riviere != null) {
			riviere.AddOneSection(_sectionNom, _debit, _prevision, _maj);
		} else {
			console.log('Rivière existante');
			riviere = new Riviere(_riviereNom);
			riviere.AddOneSection(_sectionNom, _debit, _prevision, _maj);
			secteur.AddRiviere(riviere);
		}
	} else {
		console.log('Secteur existant');
	}
}



/*	
** Méthodes Get 
*/
InfodebitManager.prototype.GetSecteur = function(_secteurNom) {
	var filter = _.filter(this.secteurs, function(secteur) {
		return secteur.nom == _secteurNom;
	});

	return _.first(filter);
}





module.exports = InfodebitManager;