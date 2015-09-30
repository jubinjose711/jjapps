(function () {
	'use strict';
	angular.module('header')
	.directive('header', headerDirective);
	function headerDirective() {
		var directive = {
			// __templateUrl__ : 'variable templateUrl',
			templateUrl: 'components/header/header.html',
			// __controller__ : 'variable controller',
			controller: 'headerController',
			//__controller as : 'variable controller',
			controllerAs: 'headerVm',
			// __restrict__ : 'variable restrict',
			restrict: 'E',
		};
		return directive;
	}
})();