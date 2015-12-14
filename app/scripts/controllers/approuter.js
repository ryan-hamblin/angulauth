'use strict';

angular.config(function($stateProvider, $urlRouterProvider){

	$urlRouterProvider.otherwise('/login');

	$stateProvider
		.state('login', {
			url: '/'
		})
		.state('/fbState', {
			url: '/fbview'
		});
});

  
