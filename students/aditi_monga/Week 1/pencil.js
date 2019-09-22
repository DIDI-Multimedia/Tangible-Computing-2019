function setup(){

	const heightProp = 1.957
	const widthProp = 0.553
	let canvas = createCanvas(windowHeight*heightProp,windowWidth*widthProp)
	canvas.parent('sketch-holder');
	// background(150)
}

function draw(){

	if (mouseIsPressed) {
		console.log('drawing!!!!!')
		noStroke()
		fill(0,0,0)
		ellipse (mouseX, mouseY, 3, 3,)
	}
	else {
		background (255)
	}
}