(function() {
  "use strict";

  angular
    .module('historyWalk')
    .controller('TourCtrl', [
      '$scope',
      '$stateParams',
      'walks',
      TourCtrl
    ]);

  function TourCtrl($scope, $stateParams, walks) {
    var walk = walks.tours[$stateParams.tourID],
        tours = walk.exhibits,
        tourID = $stateParams.tourID;

    $scope.walk = walk;
    $scope.tours = tours;
    $scope.tourID = tourID;
    var self = this;
  };

})();
