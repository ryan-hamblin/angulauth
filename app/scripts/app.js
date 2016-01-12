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

		$authProvider.github({
			clientId: '3787c20d580766b56db2',
			redirectUri: 'http://localhost:3000'
		})



		
})
	.factory('Github', function($http){
		
		var nest = {};
		var followers = {};

		var submit = function(username){
 		
 			return $http.get("https://api.github.com/users/" + username)
 			.success(function(data){
 		 	console.log('Scope.USERNAME: ', username);
 				
 				nest.name = data.name;
 				nest.login = data.login;
 				nest.html_url = data.html_url;
 				nest.avatar_url = data.avatar_url;
 				
		 		return $http.get("https://api.github.com/users/" + username + '/followers')
 			    .success(function(res){
 				    followers.list = res;
 				    console.log('followers, ', followers);
 				});
 			});
		 };	

		 return {
		 	nest: nest,
		 	followers: followers,
		 	submit: submit
		 }		
	})

	.factory('Twitter', function($http){

		
	});



