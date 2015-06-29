angular.module('historyWalk', ['ui.router', 'templates'])
  .config([
    '$stateProvider',
    '$urlRouterProvider',
    '$locationProvider',
    function ($stateProvider, $urlRouterProvider, $locationProvider) {

      $stateProvider
        .state('home', {
          url:'/',
          templateUrl: 'home/_home.html',
          controller: 'MainCtrl'
        })
        .state('walks', {
          url: '/walks/{id}',
          templateUrl: 'walks/_walks.html',
          controller: 'WalksCtrl'
        })
        .state('mediaSelect', {
          url: "/mediaSelect",
          templateUrl: 'mediaSelect/_mediaSelect.html',
          controller: 'MediaCtrl'
        });
      $urlRouterProvider.otherwise("home");
      $locationProvider.html5Mode(true);
  }]);
