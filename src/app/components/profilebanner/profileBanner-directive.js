(function () {
	'use strict';
	angular.module('profileBanner')
	.directive('profileBanner', profileBannerDirective);
	function profileBannerDirective() {
		var directive = {
			// __templateUrl__ : 'variable templateUrl',
			templateUrl: 'components/profilebanner/profileBanner.html',
			// __controller__ : 'variable controller',
			controller: 'profileBannerController',
			//__controller as : 'variable controller',
			controllerAs: 'profileBannerVm',
			// __restrict__ : 'variable restrict',
			restrict: 'E',
		};
		return directive;
	}
})();