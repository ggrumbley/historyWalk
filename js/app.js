var app = angular.module('historyWalk', ['ui.bootstrap', 'ui.router']);

app.config([
  '$stateProvider',
  '$urlRouterProvider',
  function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/");
    $stateProvider
      .state('home', {
        url:'/',
        templateUrl: 'js/home/_home.html',
        controller: 'MainCtrl'
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
      {title: "Gary's House", walk: [
        {location: 'Computer Room', text: 'This is where Gary Hacks on things.'},
        {location: 'Bedroom', text: 'This is where Gary sleeps.'},
        {location: 'Living Room', text: 'This is where Gary kicks it with Pippa and peeps.'},
        {location: 'Kitchen', text: 'This is where Gary cooks up stuff.'},
        {location: 'Backyard', text: 'This is where Gary throws balls for his puggle overlord.'}
      ]},
      {title: "Parl Blvd", walk: [
        {location: 'Twiggs Coffee', text: 'Latte, latte.'},
        {location: 'Parks & Rec', text: 'Swanky, swanky.'},
        {location: 'Small Bar', text: 'Drinky, drinky.'},
        {location: 'Plumeria', text: 'Veggie, veggie.'},
        {location: 'Lancers', text: 'Divey, divey.'}
      ]},
      {title: "Your Mom's House", walk: [
        {location: 'Twiggs Coffee', text: 'Latte, latte.'},
        {location: 'Parks & Rec', text: 'Swanky, swanky.'},
        {location: 'Small Bar', text: 'Drinky, drinky.'},
        {location: 'Plumeria', text: 'Veggie, veggie.'},
        {location: 'Lancers', text: 'Divey, divey.'}
      ]}
    ]
  };
  return o;
}]);

app.controller('MainCtrl', [
  '$scope',
  'walks',
  function ($scope, walks) {
    $scope.walks = walks.walks;
  }
]);

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
