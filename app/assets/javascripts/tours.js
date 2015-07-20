(function() {
  "use strict";

  angular
    .module('historyWalk')
    .factory('Tours', [
      '$resource',
      Tours
    ]);

    function Tours($resource) {
      return $resource("/tours");
    }
}());
