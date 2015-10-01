(function () {
	'use strict';
	angular.module('about')
	.directive('about', aboutDirective);
	function aboutDirective() {
		var directive = {
			// __templateUrl__ : 'variable templateUrl',
			templateUrl: 'components/about/about.html',
			// __controller__ : 'variable controller',
			controller: 'aboutController',
			//__controller as : 'variable controller',
			controllerAs: 'aboutVm',
			// __restrict__ : 'variable restrict',
			restrict: 'E',
		};
		return directive;
	}
})();