(function() {
  "use strict";

  angular
    .module('historyWalk')
    .controller('MainCtrl', [
      '$scope',
      '$resource',
      MainCtrl
    ]);

  function MainCtrl($scope, $resource) {
    $scope.tours = $resource('/tours/:id').query();

  }

})();
