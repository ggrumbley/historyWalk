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
        url: '/tours/{id}',
        templateUrl: 'tour/_tour.html',
        controller: 'TourCtrl'
      })
      .state('exhibit', {
        url: '/tours/{id}/exhibit/{exNum}',
        template: '<h1>Your selection</h1>'
        // templateUrl: 'mediaSelect/_mediaSelect.html',
        // controller: 'ExCtrl'
      });
    $urlRouterProvider.otherwise("home");
    $locationProvider.html5Mode(true);
  };

})();
