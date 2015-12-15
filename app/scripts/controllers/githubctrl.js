'use strict';

/**
 * @ngdoc function
 * @name angulauthApp.controller:GithubctrlJsCtrl
 * @description
 * # GithubctrlJsCtrl
 * Controller of the angulauthApp
 */
angular.module('angulauthApp')
  .controller('GithubCtrl', function ($scope, $auth) {
 		
 		$scope.authenticate = function(provider){
 			return $auth.authenticate(provider)
 				.then(function(response, err){
 				console.log('response: ', err);
 		 })
 				.catch(function(response){
 					console.log('Error: ', response);
 				});		

 	  };



 	  

 		// $scope.username = '';
 		// $http.get("https://api.github.com/users/" + $scope.username)
 		// 	.success(function(data){
 		// 		$scope.username = data.login;
		 // 		$scope.userData = data;
		 		
 		// 		console.log('data: ', $scope.userData);
 		// });

 		// $http.get("https://api.github.com/users/" + $scope.username + '/followers')
 		// 	.success(function(res){
 		// 		$scope.followers = res;
 		// 		console.log('followers, ', $scope.followers);
 		// });

  });


