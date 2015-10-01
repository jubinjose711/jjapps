(function () {
	'use strict';
	angular.module('aboutPage')
	.controller('aboutPageController', ['$scope', aboutPageController]);

 	function aboutPageController($scope) {
 		$scope.aboutPageTitle = 'About Page....';
 	}
})();