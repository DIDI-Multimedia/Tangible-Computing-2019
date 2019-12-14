var socket 
var counter = 200

connectSocket()

document.getElementaryById("button").onclick = function(){

  console.log('button pressed', counter)
  counter = counter + 10
  socket.emit('ButtonPressed',counter)
};

function connectSocket(){

  console.log('console socket')
  socket = io.socket('http://localhost:3000')
}