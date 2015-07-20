(function() {
  "use strict";

  angular
    .module('historyWalk')
    .controller('TourCtrl', [
      '$scope',
      '$stateParams',
      'Tours',
      TourCtrl
    ]);

  function TourCtrl($scope, $stateParams, Tours) {
    var Walk = Tours;
    $scope.walk = Walk.get({id: $stateParams.tourID});
    console.log($scope.walk);
    
    //     tours = walk.exhibits,
    //     tourID = $stateParams.tourID;
    //
    // $scope.walk = walk;
    // $scope.tours = tours;
    // $scope.tourID = tourID;
    var self = this;
  }

})();
