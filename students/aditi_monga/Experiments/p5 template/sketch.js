// Sketch Title - for MuW201 Tangible Computing, 2019
// Aditi Monga
// GitHub Username: aditimonga
// 9th September 

function setup(){

	let canvas = createCanvas(windowWidth/4,windowWidth/4)
	
	// Move the canvas so it's inside our <div id="sketch-holder">.
	canvas.parent('sketch-holder');



	// text(x,x*step,height/2)
	// x++
	// text(x,x*step,height/2)
	// x++
	// text(x,x*step,height/2)

}

function draw(){
	background(mouseX,mouseY,215)

	var numElements = 25

	var step = width/numElements

	textSize(step)

	// var x = 0
	
	for (var x = 0 ; x < numElements; x++){
	
		fill(random(255), random(255), random(255))
		ellipse(mouseX,mouseY/2,step/2,step/2)
}

}