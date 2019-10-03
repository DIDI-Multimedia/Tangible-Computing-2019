// var x = 100-random(-8,8)
// var y = 200-random(-8,8)

function setup(){

	let canvas = createCanvas(windowWidth/2,windowWidth/2)
	canvas.parent('sketch-holder');
	
	
}


function draw(){

	background(255)
	strokeWeight(4)

	for (var x = 10-random(-8,8); x <= width; x+=10) {
		for (var y = 20-random(-8,8); y <= width; y+=20) {
			triangle (x,x,y,y,x,y)
		}
	}

}