(function() {
  "use strict";

  angular
    .module('historyWalk')
    .controller('MainCtrl', [
      '$scope',
      'walks',
      MainCtrl
    ]);

  function MainCtrl($scope, walks) {
    $scope.tours = walks.tours;
  };

})();
