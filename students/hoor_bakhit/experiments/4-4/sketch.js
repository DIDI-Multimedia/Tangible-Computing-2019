// Sketch Title - for MuW201 Tangible Computing, 2019
// Firstname Lastname 
// GitHub Username
// Date 



function setup(){

	let canvas = createCanvas(windowWidth/2,windowWidth/2)
	
	// Move the canvas so it's inside our <div id="sketch-holder">.
	canvas.parent('sketch-holder');
	background(0)
stroke(255); 
strokeWeight(2);
  

}


function draw() {
  if (mouseIsPressed) {
    stroke(255);
  } else {
    stroke(237, 34, 93);
    fill(128, 128, 128)
  }
  rect(mouseX - 33, mouseY, mouseX + 33, mouseY);
  
}


