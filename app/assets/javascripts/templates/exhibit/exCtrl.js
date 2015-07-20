(function() {
  "use strict";

  angular
    .module('historyWalk')
    .controller('ExCtrl', [
      '$scope',
      '$stateParams',
      '$state',
      '$location',
      'Tours',
      ExCtrl
    ]);

  function ExCtrl($scope, $stateParams, $state, $location, Tours) {
    var tour = walks.tours[$stateParams.tourID],
        exhibits = tour.exhibits,
        tourID = $stateParams.tourID,
        index = $stateParams.exID;
    $scope.tour = tour;
    $scope.exhibit = exhibits[index];
    $scope.tourID = tourID;
    $scope.index = index;
    $scope.exhibits = exhibits;

    //DEBUG
    console.log($state);

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
