(function () {

  'use strict';

  angular
    .module('historyApp', [
      'ui.bootstrap',
      'ui.router'
    ])
    .config([
      '$stateProvider',
      '$urlRouterProvider',
      function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise("/");
        $stateProvider
          .state('home', {
            url:'/',
            templateUrl: 'js/home/_home.html'
          })
          .state('accordian', {
            url: "/accordian",
            templateUrl: 'js/accordian/_accordian.html'
          })
          .state('mediaSelect', {
            url: "/mediaSelect",
            templateUrl: 'js/mediaSelect/_mediaSelect.html',
            controller: 'MediaCtrl'
          })
      }
    ]);
})();
