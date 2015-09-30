(function() {
 'use strict';
 	angular.module('JJApps',[
 		'ui.router',
 		'homePage'
 		])
 	.config(['$stateProvider','$urlRouterProvider', JJAppsConfig]);
 	function JJAppsConfig($stateProvider, $urlRouterProvider) {
 		$urlRouterProvider.otherwise('/');
 	}
})();
