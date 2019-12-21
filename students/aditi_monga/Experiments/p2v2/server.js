let express = require('express')

let app = express()
// creates a new instance of express exported by the Express module:

let server = app.listen(3000)
// Starts a UNIX socket and listens for connections on the given path. This method is identical to Node’s http.Server.listen().

app.use(express.static('public'))



var io

const { Board, Proximity } = require("johnny-five");
const board = new Board();

board.on("ready", () => {


	console.log('board is ready')

	const proximity = new Proximity({

		controller: "HCSR04",
		pin: 7

	})

	io = require('socket.io')(server)

	io.sockets.on('connection', function(socket){

		console.log('socket connect')

		proximity.on("change", () => {
    		
    		const {centimeters} = proximity;
    		console.log("Proximity: ");
    		console.log("  cm  : ", centimeters);
    		// console.log("  in  : ", inches);

    		// if (centimeters < 20) {
    			
    		// 	console.log ("working")
    			let data = centimeters 
    			socket.emit('playSound', data)

    		// }

    		console.log("-----------------");

    	});
	})
});

