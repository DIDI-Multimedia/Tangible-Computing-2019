// Sketch Title - for MuW201 Tangible Computing, 2019
// Firstname Lastname 
// GitHub Username
// Date 

function setup(){

	let canvas = createCanvas(windowWidth,windowWidth/3)
	
	canvas.parent('sketch-holder');
	background(random(255), random(255), random(255))




}

function draw(){
	a = 0

	strokeWeight(mouseX/20)
	fill (random(255), mouseY/2, a++)
	rect(20,20,mouseY,mouseX)
	
if (a >= 255) {
	a = 0
}

	}


