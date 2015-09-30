(function () {
	'use strict';
	angular.module('footer')
	.directive('footer', footerDirective);
	function footerDirective() {
		var directive = {
			// __templateUrl__ : 'variable templateUrl',
			templateUrl: 'components/footer/footer.html',
			// __controller__ : 'variable controller',
			controller: 'footerController',
			//__controller as : 'variable controller',
			controllerAs: 'footerVm',
			// __restrict__ : 'variable restrict',
			restrict: 'E',
		};
		return directive;
	}
})();