(function() {
  "use strict";

  angular
    .module('historyWalk')
    .factory('tours', [
      '$http',
      Tours
    ]);

    function Tours($http) {

    };
})();
