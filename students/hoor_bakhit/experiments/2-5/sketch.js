// Sketch Title - for MuW201 Tangible Computing, 2019
// Firstname Lastname 
// GitHub Username
// Date 
// let y;
let num = 14;

function setup(){

	let canvas = createCanvas(windowWidth/4,windowWidth/4)
	
	// Move the canvas so it's inside our <div id="sketch-holder">.
	canvas.parent('sketch-holder');
	background(207,236,247)


	// y is to move it up and down
	//num is to indicate the number of elements
	//y+= is to do the spacing between the objects
	// the first number in rect is to move the x axis (since it wasnt defined from before)

	fill(255)
	let y = 20;

	for (let i=0; i< num /3; i++){
	
		rect(60, y, 100, 30)
		y += 60 
	
	} 

	fill(51)

	y = 50

	for (let i = 0; i<num /3; i++){

		ellipse(200, y, 70, 50)
		y+= 60
	
	}

	fill(0)

	let msg = "SP: Work on indentations and spacing to make your code more readible"

	text(msg,0,height-height/8)

	

}

function draw(){


}