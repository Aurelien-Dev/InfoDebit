/// <reference path="../../../libs/angularjs/angular.js" />
(function() {


	angular.module('infoDebitBrowserApp')
		.controller('homeController', infoDebitController);



	function infoDebitController (homeService) {
		var that = this;
		
		homeService.getInfoDebit().then(function(datas) {
			that.infoDebit = datas.data.result;
		})
	}



}());