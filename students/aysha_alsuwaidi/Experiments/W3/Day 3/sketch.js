

function setup() {
let canvas = createCanvas(windowWidth/3, windowWidth/3)
  canvas.parent('sketch-holder');
  capture = createCapture(VIDEO);
  capture.size(320, 240);

}

function draw(){
  background(255);
  image(capture, 0, 0, 320, 240);
  filter(INVERT);
  ellipse(100,100,20,5)

}
