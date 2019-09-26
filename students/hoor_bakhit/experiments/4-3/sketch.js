// Sketch Title - for MuW201 Tangible Computing, 2019
// Firstname Lastname 
// GitHub Username
// Date 



function setup(){

	let canvas = createCanvas(windowWidth/3,windowWidth/3)
	
	// Move the canvas so it's inside our <div id="sketch-holder">.
	canvas.parent('sketch-holder');
	background(34,155,215)
 noStroke();
  rectMode(CENTER);
}

function draw() {
  background(0);
  fill(255);
  ellipse(mouseX, height / 2, mouseY / 2 + 10, mouseY / 2 + 10);
  
}


