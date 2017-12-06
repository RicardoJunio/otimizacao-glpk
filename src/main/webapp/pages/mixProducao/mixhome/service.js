'use strict';

angular.module('Mixproducao')

.factory('MixproducaoService',
    ['Base64', '$http', '$cookieStore', '$rootScope', '$timeout',
    function (Base64, $http, $cookieStore, $rootScope, $timeout) {
    var service= {};

       service.Glpk = function ( json , callback) {

            $http.post('/api/authenticate', json)
            .success(function (response) {
            callback(response);
            });
       };
       return service;
    }]);