'use strict';

angular.module('Mixproducao')

.controller('ProducaoController',
    ['$scope', '$http','MixproducaoService',
    function ($scope, $http, $rootScope, $location, MixproducaoService) {

        $scope.count =1;
        $scope.prod1 = "Produto 1";
        $scope.prod2 = "Produto 2";

        $scope.table = function () {
             $scope.prod1 = $scope.x.nome;
             $scope.prod2 = $scope.y.nome;
        };

        $scope.submit = function(){

              var obj= [{nome:"Marcelo",idade:20},{nome:"Teste",idade:90}];
              var json =JSON.stringify(obj);

              $http.post('/api/authenticate', json)
                          .success(function (response) {
                          callback(response);
                          });
               if (response.success){
               var x = response.data;

               }
               else{
               }

        };
    }]);