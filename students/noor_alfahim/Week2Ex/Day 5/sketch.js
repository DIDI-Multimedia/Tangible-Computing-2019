// Sketch Title - for MuW201 Tangible Computing, 2019
// Firstname Lastname 
// GitHub Username
// Date 
let X = 800; 
function setup(){

	let canvas = createCanvas(windowWidth/2,windowWidth/3)
	
	canvas.parent('sketch-holder');





}

function draw(){
	a = 10

	strokeWeight(mouseX/200)

	fill(255, random(150), random(255));
	ellipse(X,400,random(0,50),random(0,50));
	X--;

	fill(random(255),random(255),random(255));
	ellipse(mouseX,mouseY,random(0,25),random(0,25));

	}
	
if (a >= 255) {
	a = 10
}
function mousePressed(){
	background(random(100),random(100),random(100));

	}


