function setup(){

	let canvas = createCanvas(windowHeight,windowWidth)
	canvas.parent('sketch-holder');
	background(255)
}

function draw(){
	if mousePressed {
		noStroke()
		fill(0)
		ellipse (mouseX, mouseY, 3, 3,)
	}
	else {
		background (255)
	}
}