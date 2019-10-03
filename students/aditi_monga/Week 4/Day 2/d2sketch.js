var mic;

function setup(){
	let canvas = createCanvas(windowWidth/2,windowWidth/2)
		canvas.parent('sketch-holder');

	mic = new p5.AudioIn()
	mic.start()
}

function draw(){
  	background(0)
	var vol = mic.getLevel();
	fill(vol*255,vol*59,vol*200)
	// rectMode(CENTER)
	ellipse(width/2, width/2,600,600)
}