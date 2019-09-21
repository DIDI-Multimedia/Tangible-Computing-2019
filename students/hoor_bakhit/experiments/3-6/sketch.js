var square1;

function setup() {
  let canvas = createCanvas(windowWidth/4,windowWidth/4)
  
  
  
  canvas.parent('sketch-holder');
  background(0)
  square1 = new Square();
}

function draw() {
    square1.grow();
    square1.display();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function Square() {
  this.x = windowWidth/4;
  this.y = windowHeight/4;
  this.dimension = -1;

  this.grow = function() {
    this.dimension++;
  };

  this.display = function() {
    stroke(0, 100, 255);
    strokeWeight(0);
    rectMode(CENTER);
    rect(this.x, this.y, this.dimension, this.dimension);
  };
}

function mousePressed() {
  s1.dimension = 1;
  redraw();
}