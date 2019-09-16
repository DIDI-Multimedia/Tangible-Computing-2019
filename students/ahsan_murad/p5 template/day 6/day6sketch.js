// Sketch Title - for MuW201 Tangible Computing, 2019
// Ahsan Murad 
// GitHub Username
// Date 

let lineX = 400;
let lineY = 400;
let lineX2 = 800;

function setup(){

	let canvas = createCanvas(800,800)
	// Move the canvas so it's inside our <div id="sketch-holder">.
	canvas.parent('sketch-holder');

	background(250, 75, 100);
}

	
function draw(){

	stroke(random(252),random(102),random(100)); // orange shade that i love so much - change HERE for LINE <---
	strokeWeight(3);
	//line(random,random,random(100,200),random(100,200))
	line(random,random,random(100,600),random(100,600))
  
  	//fill(random(0,255),random(0,255),random(0,255));
  	//noStroke();
  	//ellipse(mouseX,mouseY,random(0,500),random(0,10))
  	fill('yellow')
  	noStroke();
  	rect(mouseX,mouseY,100,100,10)
  	fill(255, random(0,150), random(0,155))
  	noStroke();
  	ellipse(random(0,800),random(0,800),random(40,50),random(40,50));
  	
}

function mousePressed(){
	background(random(100),random(100),random(100));
}