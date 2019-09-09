// Sketch Title - for MuW201 Tangible Computing, 2019
// Aditi Monga
// GitHub Username: aditimonga
// 9th September 

function setup(){

	let canvas = createCanvas(windowWidth/4,windowWidth/4)
	
	// Move the canvas so it's inside our <div id="sketch-holder">.
	canvas.parent('sketch-holder');
	background(34,155,215)

	textSize(20)

	var x = 0
	text(x,width/2+x*5,height/2)
	x++
	text(x,width/2+x*5,height/2)
	x++
	text(x,width/2+x*5,height/2)

}

// function draw(){


// }