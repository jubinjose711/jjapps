(function () {
	'user strict';
	angular.module('header')
	.controller('headerController',['$scope', '$state', headerController]);
	function headerController($scope , $state) {
		var headerVm = this;
		headerVm.homeClicked = homeClicked;
		headerVm.aboutClicked = aboutClicked;
		headerVm.workClicked = workClicked;
		headerVm.contactClicked = contactClicked;

		function homeClicked () {	
			$state.go('home');
		}
		function aboutClicked () {	
			$state.go('about');
		}
		function workClicked () {	
			$state.go('works');
		}
		function contactClicked () {	
			$state.go('contact');
		}
	}
})();