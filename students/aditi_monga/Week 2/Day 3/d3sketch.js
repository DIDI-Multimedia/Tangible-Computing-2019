function setup(){

	let canvas = createCanvas(windowWidth/2,windowWidth/2)
	canvas.parent('sketch-holder');
	
}


function draw(){

	background(0)
	stroke(255)
	strokeWeight(mouseY/4)

	for (var x = 0; x <= width; x+=100) {
		for (var y = 0; y <= height ; y+=100) {
			fill(x, y, random(mouseY))
			ellipse(x, y, 60, 60)
			
		}
	}

}