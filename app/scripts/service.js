angular.module('angulauthApp')
	.factory('Github', function($http){
		
		var nest = {};
		var followers = [];

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
 				    followers = res;
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