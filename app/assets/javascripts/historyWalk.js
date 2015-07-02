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
        .state('exhibits', {
          url: '/tours/{id}',
          templateUrl: 'tour/_tour.html',
          controller: 'TourCtrl'
        });
        //.state('mediaSelect', {
        //  //url: "/mediaSelect",
        //  url: '/walks/{id}',
        //  templateUrl: 'mediaSelect/_mediaSelect.html',
        //  controller: 'MediaCtrl'
        //});
      $urlRouterProvider.otherwise("home");
      $locationProvider.html5Mode(true);
  }]);
