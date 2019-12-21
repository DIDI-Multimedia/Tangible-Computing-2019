console.log('tweeter.js')

// var five = require("johnny-five")
var Twit = require('twit')
var request = require('request')


var config = {

        consumer_key: 'igirFZdvoZ4BYFAvVeJlYVKPi',
        consumer_secret: 'yHTKZ7T1cXA1a7lUBcPjID632f0SEoka2ShjffXjL0oSR0z9xS',
        access_token: '1188501676573020160-xbOxNnwJuhBhksJIe4kNdigGe43t7i',
        access_token_secret: 'h9Qx7QGTIcR9UKnOKjcbY8fSxEnJlP9snYx5fXYvsxhOr'

}


var tweeter = Twit(config)

function tweeDIDI(link){

	console.log('trying to send', link)

	var msg = getRandomVideoFromList(msgList) + link + ' at ' + (new Date())

	var tweet = {

		status: msg
	
	}
	
	function tweeted(err,data,respone){

		if(err){
			console.log('error',err)
		}
		else {
			console.log('sending tweet...')
		}
	}

		tweeter.post('statuses/update', tweet, tweeted)
}



var five = require("johnny-five"),
  board, button;

board = new five.Board();

board.on("ready", function() {

  // Create a new `button` hardware instance.
  // This example allows the button module to
  // create a completely default instance
  button = new five.Button(2);

  // Inject the `button` hardware into
  // the Repl instance's context;
  // allows direct command line access
  board.repl.inject({
    button: button
  });

  // Button Event API

  // "down" the button is pressed
  button.on("down", function() {
    console.log("down");
      let genre = 'Women'

    let videoList = videos[genre] 
      let video = getRandomVideoFromList(videoList) // get one item from list
   console.log()
    tweeDIDI(video)
  });

  // "hold" the button is pressed for specified time.
  //        defaults to 500ms (1/2 second)
  //        set
  button.on("hold", function() {
    console.log("hold");
    let genre = 'Muslim'

    let videoList = videos[Muslim] // list 
    let video = getRandomVideoFromList(videoList) // get one item from list
   

    tweeDIDI(video)

  });

  // "up" the button is released
  button.on("up", function() {
    console.log("up");
    let genre = '18'

    let videoList = videos[18] // list 
    console.log('video list:18', videoList)
    let video = getRandomVideoFromList(videoList)
    console.log('video:', video)
    // tweeDIDI(video)
  });
});

function getRandomVideoFromList(list){

  let rnd = Math.floor(Math.random()*list.length) // random number
  var video = list[rnd]

  console.log('video:',video)

  return video


}



let msgList = [
    
    'Men! Watch this!', 

    'Why we need feminsim:',

	'Live as a women in this day and age:', 





	]

let videos = {

  'Women': [

    'https://www.youtube.com/watch?v=e-n829QzZ58',
    'https://www.youtube.com/watch?v=lIknRGKCKZo',
    'https://www.youtube.com/watch?v=zGhu4iaBqtk'


  ], 
  
  "Muslim": [ 'https://www.youtube.com/watch?v=gj0Rz-uP4Mk',
  'https://www.youtube.com/watch?v=ZgdufzXvjqw',
  'https://www.youtube.com/watch?v=RnlvHP1AXPo'
  
  

  ],

  
  "18": [ 'https://www.youtube.com/watch?v=gj0Rz-uP4Mk',
  'https://www.youtube.com/watch?v=ZgdufzXvjqw',
  'https://www.youtube.com/watch?v=RnlvHP1AXPo'
  

  

  ] 
  
}
