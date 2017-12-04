'use strict';

angular.module('Authentication')

.controller('LoginController',
    ['$scope', '$rootScope', '$location', 'AuthenticationService',
    function ($scope, $rootScope, $location, AuthenticationService) {
        // reset login status
        AuthenticationService.ClearCredentials();

        $scope.login = function () {
            $scope.dataLoading = true;
            AuthenticationService.Login($scope.username, $scope.password, function(response) {
                if(response.success) {
                    AuthenticationService.SetCredentials($scope.username, $scope.password);
                    $location.path('/mix');
                } else {
                    $scope.error = response.message;
                    $scope.dataLoading = false;
                    $scope.username = '';
                    $scope.password = '';
                    $scope.erro = "Usuário ou senha inválidos";
                }
            });
        };
    }]);