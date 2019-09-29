var mic;

function setup(){
	createCanvas(windowWidth/2,windowWidth/2)
		canvas.parent('sketch-holder');
	background(0)
	mic = new p5.AudioIn()
	mic.start()
}

function draw(){
	var vol = mic.getLevel();
	fill(255,10)
	rectMode(CENTER)
	rect(width/2, width/2, vol*500, vol*500)
}