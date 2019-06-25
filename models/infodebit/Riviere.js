var Section = require('../../models/infodebit/Section.js');

/*	Constructeur	*/

function Riviere(nom) {
	
	/*	Membres	*/ 
	this.nom = nom;
	this.sections = [];
}


/*	Méthodes	*/

Riviere.prototype.AddOneSection = function(_sectionNom, _debit, _prevision, _maj)  {
	this.sections.push(new Section(_sectionNom, _debit, _prevision, _maj));
}



module.exports = Riviere;