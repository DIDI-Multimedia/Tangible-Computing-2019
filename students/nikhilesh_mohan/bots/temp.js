// const { Board, Led } = require("johnny-five");
// const board = new Board();

// board.on("ready", () => {
//   const led = new Led(13);

//   console.log('blink')
//   // "blink" the led in 500ms on-off phase periods
//   led.blink(500);
// });

var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {

  var ledA = new five.Led(9);
  var ledB = new five.Led(10);

var lights = new five.Leds([ledA, ledB]);

  // Set leds independently
  ledA.brightness(20);
  ledB.brightness(255);

  // Pulse all Leds.
  lights.pulse();

});
