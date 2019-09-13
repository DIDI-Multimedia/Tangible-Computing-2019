// Sketch Title - for MuW201 Tangible Computing, 2019
// Firstname Lastname 
// GitHub Username
// Date 

function setup(){

	let canvas = createCanvas(windowWidth/4,windowWidth/4)
	
}

	// Move the canvas so it's inside our <div id="sketch-holder">.
	canvas.parent('sketch-holder');
	
function draw(){
	background(100, 100, 100);
	
	stroke(255,204,0);
	strokeWeight(1);
	line(0,0,windowWidth/4,windowWidth/4)
	line(25,0,windowWidth/4,windowWidth/4);
	line(50,0,windowWidth/4,windowWidth/4);
	line(75,0,windowWidth/4,windowWidth/4);
	
	fill(255, 0, 0);
	stroke(0,255,0);
	rect(200,200,25,75,5);
	rectMode(CENTER);
	
	fill(220, 120, 50);
	stroke('white');
	quad(38,31,86,20,69,63,30,76);
	quad(362,369,314,380,331,337,370,334);
	

}