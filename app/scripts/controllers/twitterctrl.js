'use strict';

/**
 * @ngdoc function
 * @name angulauthApp.controller:TwitterctrlJsCtrl
 * @description
 * # TwitterctrlJsCtrl
 * Controller of the angulauthApp
 */
angular.module('angulauthApp')
  .controller('TwitterCtrl', function ($scope, $auth) {


  	$scope.authenticate = function(provider){
  		$auth.authenticate(provider);
  	};


  });
