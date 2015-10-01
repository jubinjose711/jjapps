(function () {
	'use strict';
	angular.module('contactPage')
	.controller('contactPageController', ['$scope', contactPageController]);

 	function contactPageController($scope) {
 		$scope.contactPageTitle = 'Contact Page....';
 	}
})();