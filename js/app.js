var app = angular.module('historyWalk', ['ui.bootstrap', 'ui.router']);

app.config([
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
}]);

app.factory('walks', [function () {
  var o = {
    walks: [
      {title: 'Computer Room', text: 'This is where Gary Hacks on things.'},
      {title: 'Bedroom', text: 'This is where Gary sleeps.'},
      {title: 'Living Room', text: 'This is where Gary kicks it with Pippa and peeps.'},
      {title: 'Kitchen', text: 'This is where Gary cooks up stuff.'},
      {title: 'Backyard', text: 'This is where Gary throws balls for his puggle overlord.'}
    ]
  };
  return o;
}]);

app.controller('MediaCtrl', [
  '$scope',
  'walks',
  function ($scope, walks) {
    var self = this;
    $scope.walks = walks.walks;
    self.selection = '';
    self.updateSelection = function(num) {
      self.selection += num;
    };
    self.reqMedia = function() {
      console.log("You want to listen to track #" + self.selection);
      console.log("You are in the " + $scope.walks[self.selection].title);
      self.selection = '';
    };
}]);
