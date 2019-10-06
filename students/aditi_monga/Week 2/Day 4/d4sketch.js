function setup(){

	let canvas = createCanvas(windowWidth/1.5,windowWidth/2)
	canvas.parent('sketch-holder');
	
}


function draw(){

	background(0)
	stroke(255)
	strokeWeight(1)

	for (var x = 0; x <= mouseX; x+=100) {
		for (var y = 10; y <= height ; y+=100) {
			for (var z = 20; z <= 0; z+=100) {
				Things[i]
			}
			fill(x, y, random(mouseY))
			triangle (x, y, z, 30, 40, 50)
			
		}
	}

}