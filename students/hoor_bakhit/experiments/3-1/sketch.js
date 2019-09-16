// Sketch Title - for MuW201 Tangible Computing, 2019
// Firstname Lastname 
// GitHub Username
// Date 

let y = 30 //controls speed

function setup(){

	let canvas = createCanvas(windowWidth/4,windowWidth/4)
	
	// Move the canvas so it's inside our <div id="sketch-holder">.
	canvas.parent('sketch-holder');
	background(34,155,215)
stroke(255); 
  frameRate(50);

}

function draw(){

background(0); // Set the background to black
  y = y + 2;
  if (y < 1) {
    y = height;
 }

  ellipse(50, y, 60, 60);



}