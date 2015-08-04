# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
meme = Tour.create!(title: "Internet Memes", cover: "http://i.imgur.com/oQiQqw1.jpg")
animal = Tour.create!(title: "Animals Riding Animals", cover: "http://i.imgur.com/Ro7nB0A.jpg")
balboa = Tour.create!(title: "Balboa Park", cover: "http://i.imgur.com/eJ5yuj0.jpg")


meme.exhibits.create([
  {
    exNum: 101,
    artist: "Anonymous",
    title: 'Joseph Ducreux',
    year: 2009,
    script: 'A portrait from 1793 remixed with archaic rap lyrics. What\'s not to love?',
    audio: '1-ducreux',
    image: "http://i.imgur.com/oQiQqw1.jpg"
  },
  {
    exNum: 102,
    artist: "Jason Steele",
    title: 'Charlie the Unicorn',
    year: 2005,
    script: 'In this odd flash animation the user is treated to a hilarious romp as Charlie the Unicorn goes in search of Candy Mountain.',
    audio: '2-charlie',
    image: "http://i.imgur.com/3ojKQOE.jpg"
  },
  {
    exNum: 103,
    artist: "Anonymous",
    title: 'I Took an Arrow in the Knee',
    year: 2011,
    script: 'Adventuring is dangerous, some people have to hang it up after a simple arrow to the knee.',
    audio: '3-arrowknee',
    image: "http://i.imgur.com/zxVUwIu.jpg"
  },
  {
    exNum: 104,
    artist: "Melissa Sander",
    title: 'Grape Stomp Lady',
    year: 1998,
    script: 'The first work hailing from poorly produced TV. This unfortunate lady eats it.',
    audio: '4-grapelady',
    image: "http://i.imgur.com/LpD2pgX.jpg"
  },
  {
    exNum: 105,
    artist: "Ghyslain Raza",
    title: 'Star Wars Kid',
    year: 2002,
    script: 'This Canadian kid has mad skills.',
    audio: '5-swkid',
    image: "http://i.imgur.com/wrrz4l7.jpg"
  },
  {
    exNum: 106,
    artist: "Gary Brolsma",
    title: 'Numa Numa',
    year: 2004,
    script: 'Words fail me.',
    audio: '6-numa',
    image: "http://i.imgur.com/rmoiDm7.jpg"
  },
  {
    exNum: 107,
    artist: "Ben Schulz",
    title: 'Leeroy Jenkins',
    year: 2005,
    script: 'Leeroy Jenkins makes enemies in the World... of Warcraft.',
    audio: '7-leeroy',
    image: "http://i.imgur.com/xj6nwDC.jpg"
  },
  {
    exNum: 108,
    artist: "Hungrybear9562",
    title: 'Double Rainbow',
    year: 2010,
    script: 'All the way across the sky! I am so high right now.',
    audio: '8-rainbow',
    image: "http://i.imgur.com/XOQMc8E.jpg"
  },
  {
    exNum: 109,
    artist: "The Buckwheat Boyz",
    title: 'Peanut Butter Jelly Time',
    year: 2002,
    script: 'I am a ba na na!',
    audio: '9-pbjtime',
    image: "http://i.imgur.com/iGP77aI.jpg"
  }
])
animal.exhibits.create([
  {
    exNum: 201,
    artist: "Anonymous",
    title: "Racoon Riding Alligator",
    year: 2015,
    script: "This is a Racoon riding an Alligator.",
    audio: '201-raccoon',
    image: "http://i.imgur.com/e4RSLOK.jpg"
  },
  {
    exNum: 202,
    artist: "Anonymous",
    title: "Goat Riding Pony",
    year: 2015,
    script: "This is a goat riding a pony.",
    audio: '202-goat',
    image: "http://i.imgur.com/qt76OeF.jpg"
  },
  {
    exNum: 203,
    artist: "Anonymous",
    title: "Rooster Riding Turtle",
    year: 2015,
    script: "This is a rooster riding a turtle.",
    audio: '203-rooster',
    image: "http://i.imgur.com/npkQ3Xp.jpg"
  },
  {
    exNum: 204,
    artist: "Anonymous",
    title: "Weasel Riding Woodpecker",
    year: 2015,
    script: "This is a Weasel riding a Woodpecker.",
    audio: '204-weasel',
    image: "http://i.imgur.com/Ro7nB0A.jpg"
  },
  {
    exNum: 205,
    artist: "Anonymous",
    title: "Pug Riding Horse",
    year: 2015,
    script: "This is a pug riding a horse.",
    audio: '205-pug',
    image: "http://i.imgur.com/48EEqx2.jpg"
  }
])

balboa.exhibits.create([
  {
    exNum: 301,
    artist: "Anonymous",
    title: "Sculpture Garden",
    year: 1915,
    script: "Balboa Park Gardens are beautiful year round.",
    audio: "205-pug",
    image: "http://i.imgur.com/eJ5yuj0.jpg"
  }
  ])
