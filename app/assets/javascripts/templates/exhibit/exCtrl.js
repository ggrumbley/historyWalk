(function() {
  "use strict";

  angular
    .module('historyWalk')
    .controller('ExCtrl', [
      '$scope',
      '$stateParams',
      '$state',
      '$location',
      'Restangular',
      ExCtrl
    ]);

  function ExCtrl($scope, $stateParams, $state, $location, Restangular) {
    var tourID = $stateParams.tourID,
        exhibitID = $stateParams.exhibitID;

    $scope.exhibitID = exhibitID;

    Restangular.one('tours', tourID).get()
    .then(function (tour) {
      $scope.tour = tour;

      tour.one('exhibits', exhibitID).get()
      .then(function (exhibit) {
        $scope.exhibit = exhibit;
      });

      tour.getList('exhibits')
      .then(function (exhibits) {

        $scope.exhibitCeil = exhibits[exhibits.length -1].id;
        $scope.exhibitFloor = exhibits[0].id;

        $scope.downExhibit = function () {
          if (exhibitID != $scope.exhibitFloor) {
            exhibitID --;
            $location.url('tour/' + tourID + '/exhibit/' + exhibitID);
          }
        };

        $scope.upExhibit = function () {
          if (exhibitID != $scope.exhibitCeil) {
            exhibitID ++;
            $location.url('tour/' + tourID + '/exhibit/' + exhibitID);
          }
        };

      });
    });


    //
    // $scope.downEx = function () {
    //   if (index != 0) {
    //     index --;
    //   }
    //   $location.url('tour/' + tourID + '/exhibit/' + index);
    // };
    // $scope.upEx = function () {
    //   if (index != (exhibits.length - 1)) {
    //     index ++;
    //   }
    //   $location.url('tour/' + tourID + '/exhibit/' + index);
    // };
  }
})();
