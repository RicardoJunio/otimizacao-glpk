'use strict';
 
angular.module('Home')
 
.controller('HomeController',
    ['$scope',
    function ($scope) {

      $scope.login = function () {
      $location.path('/login');
      }

    }]);