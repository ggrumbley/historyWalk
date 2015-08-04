(function() {
  "use strict";

  angular
    .module('historyWalk',
      [
        'ui.router',
        'templates',
        'ngTouch',
        'ngAnimate',
        'restangular'
      ])
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
        url: '/tour/{tourID}/exhibit/{exhibitID}',
        templateUrl: 'exhibit/_exhibit.html',
        controller: 'ExhibitCtrl'
      });
    $locationProvider.html5Mode(true);
  }

})();
