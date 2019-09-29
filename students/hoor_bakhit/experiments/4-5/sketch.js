// Sketch Title - for MuW201 Tangible Computing, 2019
// Firstname Lastname 
// GitHub Username
// Date 



function setup(){

	let canvas = createCanvas(windowWidth/3,windowWidth/3)
	
	// Move the canvas so it's inside our <div id="sketch-holder">.
	canvas.parent('sketch-holder');
	background(34,155,215)
stroke(255); 


}

function draw() {
  background(0);
stroke(255);
  for (let i = 0; i < height; i += 15) {
    fill(random(255),155,215);
    ellipse(0, i, width, 8);
    fill(0);
    ellipse(i, 0, 8, height);
  }
}



