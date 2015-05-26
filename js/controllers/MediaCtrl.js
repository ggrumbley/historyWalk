(function () {

  'use strict';

  angular
    .module('historyApp')
    .controller('MediaCtrl', MediaCtrl);

    function MediaCtrl() {
      var self = this;
      self.entries = [
        {id: 1, name: 'Computer Room', text: 'This is where Gary Hacks on things.'},
        {id: 2, name: 'Bedroom', text: 'This is where Gary sleeps.'},
        {id: 3, name: 'Living Room', text: 'This is where Gary kicks it with Pippa and peeps.'},
        {id: 4, name: 'Kitchen', text: 'This is where Gary cooks up stuff.'},
        {id: 5, name: 'Backyard', text: 'This is where Gary throws balls for his puggle overlord.'}
      ];
      self.selection = '';
      self.updateSelection = function(num) {
        self.selection += num;
      };
      self.reqMedia = function() {
        console.log("You want to listen to track #" + self.selection);
        console.log("You are in the " + self.entries[self.selection].name);
        self.selection = '';
      };

    };
})();
