angular.module('historyWalk')
  .controller('TourCtrl', [
    '$scope',
    '$stateParams',
    'walks',
    function ($scope, $stateParams, walks) {
      $scope.walk = walks.walks[$stateParams.id];
      $scope.tours = walks.walks[$stateParams.id].walk;
      var self = this;
      console.log($scope.tour);
  }]);
