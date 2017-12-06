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

              var api = "https://glpkback.azurewebsites.net";
              var obj= [
              {Produto:$scope.x.nome,
               Valor: $scope.x.valor,
               Material01: $scope.m1.material,
               prod1:$scope.m1.prod1,
               prod2: $scope.m1.prod2,
               disponibilidade: $scope.m1.disponibilidade,
               }
               {Produto:$scope.y.nome,
               Valor: $scope.y.valor,
               Material01: $scope.m2.material,
               prod1:$scope.m2.prod1,
               prod2: $scope.m2.prod2,
               disponibilidade: $scope.m2.disponibilidade,
               }];

              var json =JSON.stringify(obj);

              $http.post( api +'/GLPK', json)
                          .success(function (response) {
                          callback(response);
                          });
               if (response.success){
               var x = response.data;
               //jogar na tela aqui
               }
               else{
               $scope.error = "Aconteceu algum problema com o processamento, tente mais uma vez";
               }

        };
    }]);