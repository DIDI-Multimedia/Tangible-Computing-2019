function setup(){

	let canvas = createCanvas(windowWidth/2,windowWidth/2)
	canvas.parent('sketch-holder');

}


function draw(){

	noFill()
	background(255)

	for (var x = 10; x <= width; x+=40) {
		for (var y = 10; y <= height; y+=40)

			rect (x, y, mouseX/2, mouseY/2)
	}

}