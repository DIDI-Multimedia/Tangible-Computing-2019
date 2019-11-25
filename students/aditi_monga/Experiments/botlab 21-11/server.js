console.log('my node.js server is running')


let express = require('express')

let app = express()
// creates a new instance of express exported by the Express module:

let server = app.listen(3000)
// Starts a UNIX socket and listens for connections on the given path. This method is identical to Node’s http.Server.listen().

app.use(express.static('public'))
// Mounts the specified middleware function or functions at the specified path: the middleware function is executed when the base of the requested path matches path.
// serve static content 

// console.log('my socket server is running')
var led

var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {

  led = new five.Led(13);
  led.blink(500);
});


const io = require('socket.io')(server)

io.sockets.on('connection', function(socket){

	console.log('socket connect')

	socket.on('+', function(value){

		console.log(value)
		led.blink(value)

	})


	socket.on('-', function(value){
	console.log(value)
		led.blink(value)


	})

})