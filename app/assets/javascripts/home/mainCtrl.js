angular.module('historyWalk')
  .controller('MainCtrl', [
    '$scope',
    'walks',
    '$stateParams',
    function ($scope, walks, $stateParams) {
      $scope.walks = walks.walks;
      $scope.walk = walks.walks[$stateParams.id];
  }]);
