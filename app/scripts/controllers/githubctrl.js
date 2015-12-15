'use strict';

/**
 * @ngdoc function
 * @name angulauthApp.controller:GithubctrlJsCtrl
 * @description
 * # GithubctrlJsCtrl
 * Controller of the angulauthApp
 */
angular.module('angulauthApp')
  .controller('GithubCtrl', function ($scope, $auth, Github) {
 
 	  $scope.username;

 	  $scope.nest = Github.nest;
 	  
 	  $scope.followers = Github.followers;

 		$scope.submit = function(){
 			Github.submit($scope.username);
 		};
 		
  });


