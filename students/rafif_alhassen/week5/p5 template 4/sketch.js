let y = 100;
let x = 200

// The statements in the setup() function
// execute once when the program begins
function setup() {
  createCanvas(720, 400); // Size must be the first statement
  stroke(255); // Set line drawing color to white
  frameRate(60);
}
// The statements in draw() are executed until the
// program is stopped. Each statement is executed in
// sequence and after the last line is read, the first
// line is executed again.
function draw() {
  background(0); // Set the background to black
  y = y - 1;
  if (y < 0) {
    y = height;

    x = x + 20;
    if (x < 1) {
      x = width;
    }
  }
  rect(10, 10, width+10, 10);
  rect(10, 10, 10, height);
  rect(10, 10, width+10, y);
  rect(10, 10, 10, height);
  rect(10, 10, x, height);
}

// source: https://p5js.org/examples/structure-loop.html