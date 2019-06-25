/// <reference path="../../../libs/angularjs/angular.js" />
(function() {
	 'use strict';

	angular.module('infoDebitBrowserApp')
		.service('homeService', homeService);



	function homeService ($http) {
		return {
			getInfoDebit: function () {
				return $http.get('./api/infodebit', { responseType: 'json' });
			}
		}
	}


}());