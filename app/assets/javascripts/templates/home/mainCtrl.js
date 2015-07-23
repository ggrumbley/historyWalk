(function() {
  "use strict";

  angular
    .module('historyWalk')
    .controller('MainCtrl', [
      '$scope',
      'Restangular',
      MainCtrl
    ]);

  function MainCtrl($scope, Restangular) {
    Restangular.all('tours').getList()
    .then(function (tours) {
      $scope.tours = tours;
    });
  }

})();
