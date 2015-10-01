(function () {
	'use strict';
	angular.module('works')
	.directive('works', worksDirective);
	function worksDirective() {
		var directive = {
			// __templateUrl__ : 'variable templateUrl',
			templateUrl: 'components/works/works.html',
			// __controller__ : 'variable controller',
			controller: 'worksController',
			//__controller as : 'variable controller',
			controllerAs: 'worksVm',
			// __restrict__ : 'variable restrict',
			restrict: 'E',
		};
		return directive;
	}
})();