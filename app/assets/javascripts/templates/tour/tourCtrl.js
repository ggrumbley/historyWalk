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
    $scope.walk = walks.walks[$stateParams.id];
    $scope.tours = walks.walks[$stateParams.id].walk;
    var self = this;
  };

})();
