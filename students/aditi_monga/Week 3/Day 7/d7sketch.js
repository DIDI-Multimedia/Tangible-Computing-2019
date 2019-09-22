function setup(){

	let canvas = createCanvas(1400,800)
	canvas.parent('sketch-holder');
}

function draw(){

	background(255)

	for (var angle = 0; angle < PI*3; angle+=10) {
		push()
		rotate(angle)
		triangle (20,20,50,50,mouseX,mouseY)

		pop()
	}



}