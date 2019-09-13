function setup(){

	const heightProp = 0.8
	const widthProp = 0.74
	let canvas = createCanvas(windowHeight,windowWidth)
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