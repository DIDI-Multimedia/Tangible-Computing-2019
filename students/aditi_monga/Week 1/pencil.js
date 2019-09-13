function setup(){

	let canvas = createCanvas(windowHeight*0.8,windowWidth*0.74)
	canvas.parent('sketch-holder');
	background(255)
}

function draw(){
	if (mouseIsPressed) {
		noStroke()
		fill(0,0,0)
		ellipse (mouseX, mouseY, 3, 3,)
	}
	else {
		background (255)
	}
}