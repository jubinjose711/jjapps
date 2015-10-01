(function () {
	'use strict';
	angular.module('workPage',[
		'ui.router',
		'header',
		'works',
		'footer'		
	])
	.config(['$stateProvider', '$urlRouterProvider', workPageConfig]);
 	function workPageConfig($stateProvider, $urlRouterProvider) {
 		$stateProvider
 			.state('works',{
 				url : '/works',
 				templateUrl : 'workpage/workpage.html',
 				controller : 'workPageController',
 			});
 	}
})();