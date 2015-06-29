angular.module('historyWalk')
.factory('walks', [function () {
  var o = {
    walks: [
      {title: "The Internet Meme Collection", walk: [
        {location: 'Joseph Ducreux', text: 'A portrait from 1793 remixed with archaic rap lyrics. What\'s not to love?'},
        {location: 'Charlie the Unicorn', text: 'In this odd flash animation the user is treated to a hilarious romp as Charlie the Unicorn goes in search of Candy Mountain.'},
        {location: 'I Took an Arrow in the Knee', text: 'Adventuring is dangerous, some people have to hang it up after a simple arrow to the knee.'},
        {location: 'Grape Stomp Lady', text: 'The first work hailing from poorly produced TV. This unfortunate lady eats it.'},
        {location: 'Star Wars Kid', text: 'This Canadian kid has mad skills.'},
        {location: 'Numa Numa', text: 'Words fail me.'},
        {location: 'Leeroy Jenkins', text: 'Leeroy Jenkins makes enemies in the World... of Warcraft.'},
        {location: 'Double Rainbow', text: 'All the way across the sky! I am so high right now.'},
        {location: 'Peanut Butter Jelly Time', text: 'I am a ba na na!'}
      ]},
      {title: "Gary's House", walk: [
        {location: 'Computer Room', text: 'This is where Gary Hacks on things.'},
        {location: 'Bedroom', text: 'This is where Gary sleeps.'},
        {location: 'Living Room', text: 'This is where Gary kicks it with Pippa and peeps.'},
        {location: 'Kitchen', text: 'This is where Gary cooks up stuff.'},
        {location: 'Backyard', text: 'This is where Gary throws balls for his puggle overlord.'}
      ]},
      {title: "Park Blvd", walk: [
        {location: 'Twiggs Coffee', text: 'Latte, latte.'},
        {location: 'Parks & Rec', text: 'Swanky, swanky.'},
        {location: 'Small Bar', text: 'Drinky, drinky.'},
        {location: 'Plumeria', text: 'Veggie, veggie.'},
        {location: 'Lancers', text: 'Divey, divey.'}
      ]},
      {title: "Your Mom's House", walk: [
        {location: 'Twiggs Coffee', text: 'Latte, latte.'},
        {location: 'Parks & Rec', text: 'Swanky, swanky.'},
        {location: 'Small Bar', text: 'Drinky, drinky.'},
        {location: 'Plumeria', text: 'Veggie, veggie.'},
        {location: 'Lancers', text: 'Divey, divey.'}
      ]}
    ]
  };
  return o;
}]);
