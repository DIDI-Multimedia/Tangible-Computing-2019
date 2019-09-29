//var angle = 180
var mic;


function setup(){
	createCanvas(windowWidth/2,windowWidth/2)
	canvas.parent('sketch-holder');
    // angleMode(DEGREES) 
	mic = new p5.AudioIn()
	mic.start()
}

function draw(){
  	background(0)
  rectMode(CENTER)
	var vol = mic.getLevel();
  for (x = 0; x <= width; x+=10){
      rect (x, height, 10, vol*random(1000))
  }
}