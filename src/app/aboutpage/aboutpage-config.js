(function () {
	'use strict';
	angular.module('aboutPage',[
		'ui.router',
		'header',
		'profileBanner',
		'about',
		'footer'		
	])
	.config(['$stateProvider', '$urlRouterProvider', aboutPageConfig]);
 	function aboutPageConfig($stateProvider, $urlRouterProvider) {
 		$stateProvider
 			.state('about',{
 				url : '/about',
 				templateUrl : 'aboutpage/aboutpage.html',
 				controller : 'aboutPageController',
 			});
 	}
})();