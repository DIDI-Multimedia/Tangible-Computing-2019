// Sketch Title - for MuW201 Tangible Computing, 2019
// Firstname Lastname 
// GitHub Username
// Date 
let x, y;

function setup(){

	let canvas = createCanvas(windowWidth/2,windowWidth/2)
	
	// Move the canvas so it's inside our <div id="sketch-holder">.
	canvas.parent('sketch-holder');
	background(0)
 x = width /2;
  y = height /2;

}

function draw(){

stroke(random(255),155,215);
  if (mouseIsPressed === true) {
    line(mouseX, mouseY, pmouseX, pmouseY);
  }

stroke(50);
  fill(100);
  ellipse(x, y, 40, 40);
  x = x + random(-1, 1);

}
