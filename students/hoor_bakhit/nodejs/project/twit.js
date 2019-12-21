var twit = require('twit')
var request = require('request')
const { Board, Proximity } = require("johnny-five");
const board = new Board()
var timeSinceLastTweet = 0

var config = {

        consumer_key: 'rtwYuJqVitTcuEp2rzK3P0HsA',
        consumer_secret: 'cYzpeKMYrIqcw3WcMHIG3Tn0J3fPqn63FRodbze6WJoFMEd7RV',
        access_token: '1191195744239271936-l5ph4oeIQc3TnhTfsXrIU6j4AinV7d',
        access_token_secret: 'XR6OkRKysgt80GbMsU1bIBvKKtFu3v3h6IZe8L3Tu2Ah9'

}

board.on("ready", () => {
  const proximity = new Proximity({
    controller: "HCSR04",
    pin: 7
  });

  proximity.on("change", () => {
  	
  	timeSinceLastTweet ++ 

    const {centimeters, inches} = proximity;
    console.log("Proximity: ");
    console.log("  cm  : ", centimeters);
    console.log("  in  : ", inches);
    console.log("-----------------");

    if (timeSinceLastTweet > 100){
    	if (centimeters < 170) {
     

tweeDIDI("i loveeeee playing")

timeSinceLastTweet = 0 // reset back to zero once ytou tweet
    	};
    }

    console.log('wating:', timeSinceLastTweet)

});

var tweeter = twit(config)

function tweeDIDI(txt){

	var tweet = {
status: txt
	}

	function tweeted(err,data,response){

		if (err){

			console.log('error', err)
		} else {

			console.log('sending tweet...')
		}
	}

	tweeter.post('statuses/update', tweet, tweeted)
}
})

