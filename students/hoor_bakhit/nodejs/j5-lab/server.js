console.log('my node.js server is running')


let express = require('express')

let app = express()

let server = app.listen(3000)

app.use(express.static('public'))

const io = require('socket.io')(server)

console.log('my socket server is running')

const {Board,Led} = require('johnny-five')

const board = new Board()

var led

board.on('ready',function(){

	console.log('board is ready!')
	led = new Led(13)
	// led.blink(100)
})

io.sockets.on('connection', function(socket){

	console.log('socket connected')

	socket.on('ButtonPressed',function(value){

		console.log('changing blink to', value)

		led.blink(value)
	})
})