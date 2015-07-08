(function() {
  "use strict";

  angular
    .module('historyWalk')
    .controller('ExCtrl', [
      '$scope',
      '$stateParams',
      'walks',
      ExCtrl
    ]);

  function ExCtrl($scope, $stateParams, walks) {
    var tour = walks.tours[$stateParams.tourID],
        exhibits = tour.exhibits,
        index = $stateParams.exID;
    $scope.tour = tour;
    $scope.exhibit = exhibits[index];

  };
})();
