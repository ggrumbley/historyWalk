(function() {
  "use strict";

  angular
    .module('historyWalk',
      [
        'ui.router',
        'templates',
        'plangular'
      ])
    .config([
      '$stateProvider',
      '$urlRouterProvider',
      '$locationProvider',
      'plangularConfigProvider',
      Router
    ]);

  function Router($stateProvider, $urlRouterProvider, $locationProvider, plangularConfigProvider) {

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
    plangularConfigProvider.clientId = '9b3a578e8c2b9a25ede5ddf066cb82fe';
  };

})();
