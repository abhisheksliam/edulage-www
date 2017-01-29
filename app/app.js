
;(function() {


  /**
   * Definition of the main app module and its dependencies
   */
  angular
    .module('boilerplate', [
      'ngRoute'
    ])
    .config(config);

  // safe dependency injection
  // this prevents minification issues
  config.$inject = ['$routeProvider', '$locationProvider', '$httpProvider', '$compileProvider'];

  /**
   * App routing
   *
   * You can leave it here in the config section or take it out
   * into separate file
   *
   */
  function config($routeProvider, $locationProvider, $httpProvider, $compileProvider) {

    $locationProvider.html5Mode(false);

    // routes
    $routeProvider
      .when('/', {
        redirectTo: '/dashboard'
      })
      .when('/dashboard', {
        templateUrl: 'views/dashboard.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .when('/pragma', {
        templateUrl: 'views/pragma.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .when('/mentor', {
        templateUrl: 'views/mentor.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .when('/classroom', {
        templateUrl: 'views/classroom.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .when('/coming-soon', {
        templateUrl: 'views/coming-soon.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .otherwise({
        templateUrl: 'views/404.html',
        controller: 'MainController',
        controllerAs: 'main'
      });

    $httpProvider.interceptors.push('authInterceptor');

  }

  /**
   * You can intercept any request or response inside authInterceptor
   * or handle what should happend on 40x, 50x errors
   *
   */
  angular
    .module('boilerplate')
    .factory('authInterceptor', authInterceptor);

  authInterceptor.$inject = ['$rootScope', '$q', 'LocalStorage', '$location'];

  function authInterceptor($rootScope, $q, LocalStorage, $location) {

    return {

      // intercept every request
      request: function(config) {
        config.headers = config.headers || {};
        return config;
      },

      // Catch 404 errors
      responseError: function(response) {
        if (response.status === 404) {
          $location.path('/');
          return $q.reject(response);
        } else {
          return $q.reject(response);
        }
      }
    };
  }


  /**
   * Run block
   */
  angular
    .module('boilerplate')
    .run(run);

  run.$inject = ['$rootScope', '$location'];

  function run($rootScope, $location) {

    // put here everything that you need to run on page load

  }


})();
