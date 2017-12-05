'use strict';

angular.module('Mixproducao')

.controller('ProducaoController',
    ['$scope', '$rootScope', '$location', 'AuthenticationService',
    function ($scope, $rootScope, $location, AuthenticationService) {

        $scope.count =1;
        $scope.prod1 = "Produto 1";
        $scope.prod2 = "Produto 2";

        $scope.table = function () {
             $scope.prod1 = $scope.x.nome;
             $scope.prod2 = $scope.y.nome;






        }

    }]);