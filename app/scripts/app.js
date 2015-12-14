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
    'ui.router'
  ])
//this is my router. It actually uses UI-Router to provide state instead of routing. 
//this is the common practice amongts NG-Devs. 
.config(function($stateProvider, $urlRouterProvider){

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
		
});
