// const {Board,Led} = require ('johnny-five')

// const board = new Board()

// board.on('ready',function(){
	
// 	led = new Led(13)
// 	led.blink(200)
// })

console.log('arduino proximity codenodez')
const { Board, Proximity } = require("johnny-five");
const board = new Board();

board.on("ready", () => {

	console.log('board ready')
  const proximity = new Proximity({
    controller: "HCSR04",
    pin: 7
  });

  // proximity.on("change", () => {
  //   const {centimeters, inches} = proximity;
  //   console.log("Proximity: ");
  //   console.log("  cm  : ", centimeters);
  //   console.log("  in  : ", inches);
  //   console.log("-----------------");
  // });
})