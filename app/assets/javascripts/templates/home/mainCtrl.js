(function() {
  "use strict";

  angular
    .module('historyWalk')
    .controller('MainCtrl', [
      '$scope',
      'walks',
      '$stateParams',
      MainCtrl
    ]);
    
  function MainCtrl($scope, walks, $stateParams) {
    $scope.walks = walks.walks;
    $scope.walk = walks.walks[$stateParams.id];
  };

})();
