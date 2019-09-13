// Sketch Title - for MuW201 Tangible Computing, 2019
// Firstname Lastname 
// GitHub Username
// Date 

function setup(){

	let canvas = createCanvas(windowWidth/4,windowWidth/4)
	background(100, 100, 100);
	
}

	// Move the canvas so it's inside our <div id="sketch-holder">.
	canvas.parent('sketch-holder');
	
function draw(){
	
	
	stroke(255,204,0, 150);
	strokeWeight(1);
	line(mouseX,mouseY,windowWidth/4,windowWidth/4)
	line(25,0,windowWidth/4,windowWidth/4);
	line(50,0,windowWidth/4,windowWidth/4);
	line(75,0,windowWidth/4,windowWidth/4);
	
	fill(255, 0, 0, 100);
	stroke(0,255,0);
	rect(mouseX, mouseY,25,75,5);
	rectMode(CENTER);
	
	fill(220, 120, 50);
	stroke('white');
	quad(38,31,86,20,69,63,30,76);
	quad(362,369,314,380,331,337,370,334);
	

}

function mousePressed(){
	background(100,100,100);
}