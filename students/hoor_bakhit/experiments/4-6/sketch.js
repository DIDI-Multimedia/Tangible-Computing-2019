// Sketch Title - for MuW201 Tangible Computing, 2019
// Firstname Lastname 
// GitHub Username
// Date 

let r, g, b;

function setup(){

	let canvas = createCanvas(windowWidth/2,windowWidth/2)
	
	// Move the canvas so it's inside our <div id="sketch-holder">.
	canvas.parent('sketch-holder');
	background(34,155,215)
stroke(255); 
  

r = random(255);
  g = random(255);
  b = random(255);
}


function draw() {
  background(0);
  // Draw a circle
  strokeWeight(8);
  stroke(255);
  fill(r, g, b, 255);

  rect(100, 100, 200, 200);
}

// When the user clicks the mouse
function mousePressed() {
  // Check if mouse is inside the circle
  let d = dist(mouseX, mouseY, 200, 200);
  if (d < 100) {
    // Pick new random color values
    r = random(255);
    g = random(255);
    b = random(255);
  }
}
