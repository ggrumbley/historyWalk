angular.module('historyWalk')
  .controller('WalksCtrl', [
    '$scope',
    '$stateParams',
    'walks',
    function ($scope, $stateParams, walks) {
      $scope.walk = walks.walks[$stateParams.id];
      var self = this;
      self.selection = '';
      self.updateSelection = function(num) {
        self.selection += num;
      };
      self.reqMedia = function() {
        var item = parseInt(self.selection),
            walkLength = $scope.walk.walk.length;
        if (parseInt(self.selection) >= walkLength) {
          self.error = "Please make a selection less than " + walkLength;
          self.selection = '';
          self.selected = '';
        } else {
          self.error = '';
          self.selected = $scope.walk.walk[item];
          self.selection = '';
        }

      };
  }]);
