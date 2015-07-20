(function() {
  "use strict";

  angular
    .module('historyWalk')
    .controller('MainCtrl', [
      '$scope',
      'Tours',
      MainCtrl
    ]);

  function MainCtrl($scope, Tours) {
    $scope.tours = Tours.query();
  }

})();
