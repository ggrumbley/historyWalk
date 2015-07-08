(function() {
  "use strict";

  angular
    .module('historyWalk')
    .controller('AudioCtrl', [
      '$sce',
      AudioCtrl
    ]);

    function AudioCtrl($sce) {
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
