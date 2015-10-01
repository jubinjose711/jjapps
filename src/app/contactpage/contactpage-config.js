(function () {
	'use strict';
	angular.module('contactPage',[
		'ui.router',
		'header',
		'profileBanner',
		'footer'		
	])
	.config(['$stateProvider', '$urlRouterProvider', contactPageConfig]);
 	function contactPageConfig($stateProvider, $urlRouterProvider) {
 		$stateProvider
 			.state('contact',{
 				url : '/contact',
 				templateUrl : 'contactpage/contactpage.html',
 				controller : 'contactPageController',
 			});
 	}
})();