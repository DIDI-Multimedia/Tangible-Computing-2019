// Sketch Title - for MuW201 Tangible Computing, 2019
// Firstname Lastname 
// GitHub Username
// Date 

function setup(){

	let canvas = createCanvas(windowWidth/2,windowWidth/2)
	
	// Move the canvas so it's inside our <div id="sketch-holder">.
	canvas.parent('sketch-holder');

var numElements = 10
	textSize(10)
	var step = width/numElements
	var colourStep = 255/numElements
	textAlign(CENTER,CENTER)

function draw(){

background(random(255),random(255),random(255))

	
	// console.log(step)

	for (var x = 0 ; x < numElements; x++){
		for (var y = 0 ; y < numElements; y++){
			
			stroke(255)
			strokeWeight(second()/2)
			// noStroke()
			fill(mouseX,y*colourStep,50)
			ellipse(x*step,y*step,step)
		}

	}