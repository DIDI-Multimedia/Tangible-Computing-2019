let y = 100;


function setup() {
  createCanvas(720, 400); 
  frameRate(30);
}

function draw() {
  background(0); 
  y = y - 1;
  if (y < 0) {
    y = height;
  }
  rect(100, y, width, y);
  rect(y, 10, width, y/2);
   rect(10, y*9, width, y/10);

}
// source: https://p5js.org/examples/loop.html
  
    