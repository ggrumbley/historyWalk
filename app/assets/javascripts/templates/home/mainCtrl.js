(function() {
  "use strict";

  angular
    .module('historyWalk')
    .controller('MainCtrl', [
      '$scope',
      'walks',
      '$stateParams',
      MainCtrl
    ]);

  function MainCtrl($scope, walks, $stateParams) {
    $scope.tours = walks.tours;
    $scope.walk = walks.tours[$stateParams.tourID];
  };

})();
