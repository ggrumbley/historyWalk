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

    Restangular.one('tours', tourID).get()
    .then(function (tour) {
      $scope.tour = tour;

      tour.one('exhibits', exhibitID).get()
      .then(function (exhibit) {
        $scope.exhibit = exhibit;
      });

      tour.getList('exhibits')
      .then(function (exhibits) {
        console.log(exhibits);
        console.log(exhibits[0].id);

        $scope.downExhibit = function () {
          if (exhibitID != exhibits[0].id) {
            exhibitID --;
            console.log(exhibitID);
            $location.url('tour/' + tourID + '/exhibit/' + exhibitID);
          }
        };

        $scope.upExhibit = function () {
          exhibitID ++;
          console.log(exhibitID);
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
