// Sketch Title - for MuW201 Tangible Computing, 2019
// Firstname Lastname 
// GitHub Username
// Date 

function setup(){

	let canvas = createCanvas(windowWidth/4,windowWidth/4)
	
	// Move the canvas so it's inside our <div id="sketch-holder">.
	canvas.parent('sketch-holder');
	background(random(255), random(255), random(255))


	textSize(10)
	
	// var x = 0 
	// var step = 40 
	// var step = windowWidth/numElements
	// textSize(step)
	// for(var x=0; x <100; x++){
	// for (var x = 0; x < numElements; x++){
	// 	fill(random(255), random(255), random(255))
	// 	ellipse (x * step,height/2,step/2,step/2)
}

function draw(){
	background(0)
	var numElements = 100
	textSize(width/20)
	var step = width/numElements
	textAlign(CENTER, CENTER)
	// console.log(step)

	for (var x = 0; x < numElements; x++) {

		for (var y = 0; y < numElements; y++) {
			
			Stroke(255)
			strokeWeight(2)
			fill(x*colorStep, y*colorStep,second()*3)
			rect(x*step,y*step,step,step)
			// fill(0)
			// var string = x +"," + y
			// text (string, x* step+25, y*step+25)
		}
	}
	


	}




		// text(x,x*step,height/2)
	
	// text(x,x*2,height/2)
	// x++
	// text(x,x*2,height/2)
	// x++
	// text(x,x*2,height/2)
	
	


// function draw(){


