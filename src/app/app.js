(function() {
 'use strict';
 	angular.module('JJApps',[
 		'ui.router',
 		'homePage',
 		'aboutPage',
 		'workPage',
 		'contactPage'
 		])
 	.config(['$stateProvider','$urlRouterProvider', JJAppsConfig]);
 	function JJAppsConfig($stateProvider, $urlRouterProvider) {
 		$urlRouterProvider.otherwise('/');
 	}
})();
