(function() {
  "use strict";

  angular
    .module('historyWalk', ['ui.router', 'templates'])
    .config([
      '$stateProvider',
      '$urlRouterProvider',
      '$locationProvider',
      Router
    ]);

  function Router($stateProvider, $urlRouterProvider, $locationProvider) {

    $stateProvider
      .state('home', {
        url:'/',
        templateUrl: 'home/_home.html',
        controller: 'MainCtrl'
      })
      .state('tour', {
        url: '/tour/{tourID}',
        templateUrl: 'tour/_tour.html',
        controller: 'TourCtrl'
      })
      .state('exhibit', {
        url: '/tour/{tourID}/exhibit/{exID}',
        templateUrl: 'exhibit/_exhibit.html',
        controller: 'ExCtrl'
      });
    $urlRouterProvider.otherwise("/");
    $locationProvider.html5Mode(true);
  };

})();
