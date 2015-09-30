(function () {
	'use strict';
	angular.module('homePage',[
		'ui.router',
		'header',
		'profileBanner',
		'footer'		
	])
	.config(['$stateProvider', '$urlRouterProvider', homePageConfig]);
 	function homePageConfig($stateProvider, $urlRouterProvider) {
 		$stateProvider
 			.state('home',{
 				url : '/',
 				templateUrl : 'homepage/homepage.html',
 				controller : 'homePageController',
 			});
 	}
})();