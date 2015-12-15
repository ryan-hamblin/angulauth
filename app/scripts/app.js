'use strict';

/**
 * @ngdoc overview
 * @name angulauthApp
 * @description
 * # angulauthApp
 *
 * Main module of the application.
 */

 //this is the main angular app module. Used to store all other modules throughout my app.
angular.module('angulauthApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'ui.router',
    'satellizer'
  ])
//this is my router. It actually uses UI-Router to provide state instead of routing. 
//this is the common practice amongts NG-Devs. 
.config(function($stateProvider, $urlRouterProvider, $authProvider){
 //routes and such
	$urlRouterProvider.otherwise('/main');

	$stateProvider
		.state('main', {
			url: '/',
			templateUrl: 'views/main.html'
		})
		.state('about', {
			url: '/about',
			templateUrl: 'views/about.html'
		})
		.state('contact', {
			url: '/contact',
			templateUrl: 'views/contact.html'
		})
		.state('fbook', {
			url: '/fbview',
			templateUrl: 'views/fbview.html'
		})
		.state('twitter', {
			url: '/twittview',
			templateUrl: 'views/twitterview.html'
		})
		.state('github', {
			url: '/github',
			templateUrl: 'views/githubview.html'
		});


		// auth stuff. 

		$authProvider.oauth2({
				name: 'github',
				clientId: '',
			  url: '/auth/github',
  			authorizationEndpoint: 'https://github.com/login/oauth/authorize',
  			redirectUri: window.location.origin,
			  optionalUrlParams: ['scope'],
			  scope: ['user:email'],
			  scopeDelimiter: ' ',
			  type: '2.0',
			  popupOptions: { width: 1020, height: 618 }
			});


			// $authProvider.twitter({
			// 	clientId: 'eDKf3suvrzsixugJsm0I9MOMc'
			//   url: '/auth/twitter',
			//   authorizationEndpoint: 'https://api.twitter.com/oauth/authenticate',
			//   redirectUri: window.location.origin,
			//   type: '1.0',
			//   popupOptions: { width: 495, height: 645 }
			// });

		
});


