(function() {
  "use strict";

  angular
    .module('historyWalk')
    .controller('TourCtrl', [
      '$scope',
      '$stateParams',
      'Restangular',
      TourCtrl
    ]);

  function TourCtrl($scope, $stateParams, Restangular) {
    var tourID = $stateParams.tourID;

    Restangular.one('tours', tourID).get()
    .then(function (tour) {
      $scope.tour = tour;

      tour.getList('exhibits').then(function (exhibits) {
        $scope.exhibits = exhibits;
      });
    });

  }

})();
