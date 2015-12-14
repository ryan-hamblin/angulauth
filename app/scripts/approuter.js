'use strict';

/**
 * @ngdoc function
 * @name angulauthApp.controller:ApprouterCtrl
 * @description
 * # ApprouterCtrl
 * Controller of the angulauthApp
 */
angular.config(function($stateProvider, $urlRouterProvider){

	$urlRouterProvider.otherwise('/login');

	$stateProvider
		.state('main', {
			url: '/',
			templateUrl: 'views/main.html',
			controller: 'main.js' 
		})
		.state('/fbState', {
			url: '/fbview',
			templateUrl: '/views/fbview.html' 
		});
});

  
