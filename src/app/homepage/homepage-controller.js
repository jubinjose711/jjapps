(function () {
	'use strict';
	angular.module('homePage')
	.controller('homePageController', ['$scope', homePageController]);

 	function homePageController($scope) {
 		$scope.homePageTitle = 'Home Page....';
 	}
})();