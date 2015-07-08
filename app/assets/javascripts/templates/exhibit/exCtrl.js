(function() {
  "use strict";

  angular
    .module('historyWalk')
    .controller('ExCtrl', [
      '$scope',
      '$stateParams',
      'walks',
      '$sce',
      ExCtrl
    ]);

  function ExCtrl($scope, $stateParams, walks, $sce) {
    var tour = walks.tours[$stateParams.tourID],
        exhibits = tour.exhibits,
        index = $stateParams.exID;
    $scope.tour = tour;
    $scope.exhibit = exhibits[index];

    this.config = {
      sources: [
        {src: $sce.trustAsResourceUrl("http://static.videogular.com/assets/audios/videogular.mp3"), type: "audio/mpeg"},
        {src: $sce.trustAsResourceUrl("http://static.videogular.com/assets/audios/videogular.ogg"), type: "audio/ogg"}
      ],
      theme: {
        url: "/videogular-themes-default/videogular.css"
      }
    };
  };
})();
