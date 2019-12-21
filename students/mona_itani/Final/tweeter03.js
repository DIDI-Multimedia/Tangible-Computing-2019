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

function tweeDIDI(msg){

	console.log('trying to send', msg)

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
    tweeDIDI('https://www.youtube.com/watch?v=lIknRGKCKZo')
  });

  // "hold" the button is pressed for specified time.
  //        defaults to 500ms (1/2 second)
  //        set
  button.on("hold", function() {
    console.log("hold");
    tweeDIDI('https://www.youtube.com/watch?v=beixsgKr93o')
  });

  // "up" the button is released
  button.on("up", function() {
    console.log("up");
    tweeDIDI('https://www.youtube.com/watch?v=hjKCYYQcBqY')
  });
});




