var rectSize = 20
var positionX = 5
var speed = 0.5
var a = 0

function setup(){

	let canvas = createCanvas(windowWidth/2,windowWidth/2)
	canvas.parent('sketch-holder');
	background(0)

}


function draw(){

	stroke(a+0.25,random(255),a++)
	rectMode(CENTER)
	rect (positionX, windowHeight/2, rectSize, rectSize)

	if (positionX > windowWidth/2) {
		speed = -0.5
	}

	positionX = positionX + speed

	if (a > 255) {
		a = 0
	}
}


// var x = 0
// speed = 3

// function setup(){
// 	createCanvas (600,400)
// }

// function draw(){
// 	background(0)
// 	stroke(255)
// 	strokeWeight(4)
// 	noFill()
// 	ellipse(x, 200, 100, 100)

// 	if (x > 600) {
// 		speed = -3
// 	}
// 	x = x + speed
// }