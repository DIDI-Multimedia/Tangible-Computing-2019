var a = 200
var b = 200

function setup(){

	let canvas = createCanvas(windowWidth/2,windowWidth/2)
	canvas.parent('sketch-holder');
	background(0)
}


function draw(){

	stroke(random(255),random(255),mouseX/2)
	fill(0,0,0,random(0,255))
	strokeWeight(8)

	triangle(pmouseX,pmouseY,mouseX,mouseY,a++,b--)

	if (a >= 201) {
		a = 0
	}

	if (b <= 0) {
		b = 300
	}


	if(mouseIsPressed){
		background(0)
	}
}