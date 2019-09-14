var circleX = 10
var a = 0

function setup(){

	let canvas = createCanvas(windowWidth/2,windowWidth/2)
	canvas.parent('sketch-holder');

	background(0)

}


function draw(){

	stroke(a+0.25,random(255),a++)
	rect (circleX+0.5, windowHeight/2, circleX++, circleX++)

}
