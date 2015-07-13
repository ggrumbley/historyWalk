(function() {
  "use strict";

  angular
    .module('historyWalk')
    .controller('ExCtrl', [
      '$scope',
      '$stateParams',
      '$location',
      'walks',
      ExCtrl
    ]);

  function ExCtrl($scope, $stateParams, $location, walks) {
    var tour = walks.tours[$stateParams.tourID],
        exhibits = tour.exhibits,
        tourID = $stateParams.tourID,
        index = $stateParams.exID;
    $scope.tour = tour;
    $scope.exhibit = exhibits[index];
    $scope.tourID = tourID;
    $scope.index = index;

    $scope.downEx = function () {
      if (index != 0) {
        index --;
      }
      $location.url('tour/' + tourID + '/exhibit/' + index);
    };
    $scope.upEx = function () {
      if (index != (exhibits.length - 1)) {
        index ++;
      }
      $location.url('tour/' + tourID + '/exhibit/' + index);
    };
  };
})();
