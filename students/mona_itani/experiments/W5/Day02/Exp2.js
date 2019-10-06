let y = 100;


function setup() {
  createCanvas(720, 400); 
  stroke(0);
  strokeWeight(255) 
  frameRate(60);
}
function draw() {
  background(0); 
  y = y - 1;
  if (y < 0) {
    y = height;

  }
  circle(2, width/2,y, y);
   circle(y, 2, width/9, y);
    circle(y, y, width/9, 10);
      circle(width/9, 2,y , y);
  }

// source: https://p5js.org/examples/structure-loop.html