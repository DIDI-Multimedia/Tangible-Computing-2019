

function setup() {
let canvas = createCanvas(windowWidth/1, windowWidth/2)
  canvas.parent('sketch-holder');
  capture = createCapture(VIDEO);
  

}

function draw(){
  background(230,random(255),random(255),random(255));
  image(capture, 100,50,1000, 500);
  stroke(255)
	strokeWeight(70)
	ellipse(mouseX/2,mouseY/2,24,2)
  

}
