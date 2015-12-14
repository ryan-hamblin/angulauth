'use strict';

/**
 * @ngdoc function
 * @name angulauthApp.controller:ApprouterCtrl
 * @description
 * # ApprouterCtrl
 * Controller of the angulauthApp
 */
angular.config(function($stateProvider, $urlRouterProvider){

	$urlRouterProvider.otherwise('/loginSate');

	$stateProvider
		.state('/loginState', {
			url: '/',
			templateUrl: '/views/main.html' 
		})
		.state('/fbState', {
			url: '/fbview',
			templateUrl: '/views/fbview.html' 
		});
});

  
