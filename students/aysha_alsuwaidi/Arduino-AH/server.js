console.log('my node.js server is running')


let express = require('express')

let app = express()
// creates a new instance of express exported by the Express module:

let server = app.listen(3000)
// Starts a UNIX socket and listens for connections on the given path. This method is identical to Node’s http.Server.listen().

app.use(express.static('public'))
// Mounts the specified middleware function or functions at the specified path: the middleware function is executed when the base of the requested path matches path.
// serve static content 
var led 
// console.log('my socket server is running')
const io = require('socket.io')(server) // load socket it
const {Board,Led} = require ('johnny-five')

const board = new Board()
board.on("ready",function(){
	led = new Led(13);
	led.blink(100)
})

io.sockets.on('connection',function(socket){

	console.log('socket connected')
	socket.on('ButtonPressed', function(value){
		console.log('changing blink to', value)
		led.blink(value)
	})
})