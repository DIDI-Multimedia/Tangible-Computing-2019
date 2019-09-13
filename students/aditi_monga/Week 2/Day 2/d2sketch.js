var circleX = 10
var a = 0

function setup(){

	let canvas = createCanvas(windowWidth/2,windowWidth/2)
	canvas.parent('sketch-holder');

	background(0)

}


function draw(){

	stroke(a++,random(255),a++)
	ellipse (circleX++, windowHeight/2, circleX++, circleX++)

}
