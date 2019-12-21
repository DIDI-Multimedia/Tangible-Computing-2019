console.log('my node.js server is running')


let express = require('express')

let app = express()
// creates a new instance of express exported by the Express module:

let server = app.listen(3000)
// Starts a UNIX socket and listens for connections on the given path. This method is identical to Node’s http.Server.listen().

app.use(express.static('public'))
// Mounts the specified middleware function or functions at the specified path: the middleware function is executed when the base of the requested path matches path.
// serve static content 

//var ledArr = []
var io 


//var five = require("johnny-five");
// const { Board, Led } = require("johnny-five");
// const board = new Board();

var five = require("johnny-five");
var board = new five.Board();

//const board = new five.Board();



board.on("ready", () => {
  
  var ledA = new five.Led(9);
  var ledB = new five.Led(10);
  var ledC = new five.Led(11);
  var ledD = new five.Led(6);

  var lights = new five.Leds([ledA, ledB, ledC])

  io = require('socket.io')(server) // loads socket io 

  io.sockets.on('connection', function(socket){

	console.log('socket connected')

	socket.on('+', function(obj){

		console.log(obj.x)

		try { 
		// console.log('blink left', obj.x)
		// console.log(obj.x)
		// console.log(led01)
		// led01.blink(200)
		if( obj.x<200 )
		{
			ledA.brightness(255);
            ledB.brightness(70);
            ledC.brightness(20);
            ledD.brightness(255);
		} 

		if( obj.x>250 && obj.x<400 )
		{
			ledA.brightness(50);
            ledB.brightness(255);
            ledC.brightness(50);
            ledD.brightness(50);
          
		}

		if( obj.x>400 && obj.x<640 )
		{
			ledA.brightness(20);
            ledB.brightness(70);
            ledC.brightness(255);
            ledD.brightness(20);
          
		}

		
  

		

	}catch{}


	})

	// socket.on('-', function(value){
	// try {

	//     console.log('blink right', value)
	    
	//     if( value > 400 )
	// 	{
	// 	    led.pulse(value)
	// 	}

	// 	if( value < 200 )
 //        {
 //            led.pulse(value)
 //        }

	// 	led.pulse(value)

	// }

	// catch{

	// }


	})


});






// var five = require("johnny-five");
// var board = new five.Board();

// board.on("ready", function() {

//   var ledA = new five.Led(9);
//   var ledB = new five.Led(10);

// var lights = new five.Leds([ledA, ledB]);

//   // Set leds independently
//   ledA.brightness(20);
//   ledB.brightness(255);

//   // Pulse all Leds.
//   lights.pulse();