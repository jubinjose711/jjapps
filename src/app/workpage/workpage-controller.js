(function () {
	'use strict';
	angular.module('workPage')
	.controller('workPageController', ['$scope', workPageController]);

 	function workPageController($scope) {
 		$scope.workPageTitle = 'Work Page....';
 	}
})();