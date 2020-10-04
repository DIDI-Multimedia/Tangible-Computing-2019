

function setup() {
let canvas = createCanvas(windowWidth/1, windowWidth/2)
  canvas.parent('sketch-holder');
  capture = createCapture(VIDEO);
  

}

function draw(){
  background(255);
  image(capture, 100,50,1000, 500);
  tint(255,0,150);
 
  

}
