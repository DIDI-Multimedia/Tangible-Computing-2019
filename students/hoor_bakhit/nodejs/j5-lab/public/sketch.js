var socket
var counter = 200

connectSocket()


document.getElementById("button").onclick = function() {

console.log('button pressed', counter)
counter = counter + 10
socket.emit('ButtonPressed',counter)


};

function connectSocket(){

	console.log('connect socket')
	socket = io.connect('http:/localhost:3000')
}