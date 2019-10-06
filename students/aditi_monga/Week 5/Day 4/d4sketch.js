var mic;


function setup(){
let canvas = createCanvas(windowWidth/2,windowWidth/2)
    canvas.parent('sketch-holder')

    angleMode(DEGREES)

	mic = new p5.AudioIn()
	mic.start()
}

function draw(){
 
	var vol = mic.getLevel();

  background(10,100,vol*1000)

  push()
  translate (width/2,width/2)
  scale(vol*8)
  rotate(vol*360)
  rectMode(CENTER)
  noStroke()
  fill(vol*1000,100,10)
  rect(0,0,100,50)
  pop()
}