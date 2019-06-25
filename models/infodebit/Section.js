

function Section(_nom, _debit, _prevision, _maj) {
	/*	Membres	*/
	this.nom = _nom;
	this.debit = _debit;
	this.prevision = _prevision;
	this.maj = _maj;
}

/*	Méthodes	*/
Section.prototype.toString = function() {
	return this.nom;
}



module.exports = Section;