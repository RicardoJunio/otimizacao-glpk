'use strict';

// declare modules
angular.module('Home', []);
angular.module('Authentication', []);
angular.module('Mixproducao', []);
angular.module('Help', []);

angular.module('BasicHttpAuthExample', [
    'Home',
    'Authentication',
    'Mixproducao',
    'Help',
    'ngRoute',
    'ngCookies'
])

.config(['$routeProvider', function ($routeProvider) {

    $routeProvider
         .when('/', {
             controller: 'HomeController',
             templateUrl: 'pages/home/views/main.html'
         })
        .when('/login', {
            controller: 'LoginController',
            templateUrl: 'pages/authentication/views/login.html'
        })
        .when('/mix', {
            controller: 'ProducaoController',
            templateUrl: 'pages/mixProducao/mixhome/views/mixhome.html'
        })
        .when('/help', {
            controller:'HelpController',
            templateUrl: 'pages/mixProducao/help/help.html'
        })

       .otherwise({ redirectTo: '/' });
}])

.run(['$rootScope', '$location', '$cookieStore', '$http',
    function ($rootScope, $location, $cookieStore, $http) {
        // keep user logged in after page refresh
        $rootScope.globals = $cookieStore.get('globals') || {};
        if ($rootScope.globals.currentUser) {
            $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata; // jshint ignore:line
        }

//        $rootScope.$on('$locationChangeStart', function (event, next, current) {
//            // redirect to login page if not logged in
//            if ($location.path() !== '/login' && !$rootScope.globals.currentUser) {
//                $location.path('/login');
//            }
//        });
    }]);