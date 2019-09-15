// Sketch Title - for MuW201 Tangible Computing, 2019
// Ahsan Murad 
// GitHub Username
// Date 
let cX = 400;
let lineX = 400;
let lineY = 400;
function setup(){

	let canvas = createCanvas(800,800)
	background(250, 250, 100);
	
	//let lineX = 400;
	//let lineY = 400;
	//let cX = 400;
}

	// Move the canvas so it's inside our <div id="sketch-holder">.
	canvas.parent('sketch-holder');
	
function draw(){
	//noStroke();
	stroke(252,102,0,200);
	strokeWeight(3);
	//line(mouseX,mouseY,windowWidth/4,windowWidth/4)
	//line(25,0,800,800);
	line(50,0,800,800);
	line(400,400,lineX,0);
	line(400,400,390,0);
	line(400,400,380,0);
	line(400,400,370,0);
	line(400,400,360,0);
	line(400,400,350,0);
	line(400,400,0,lineY);
	line(400,400,0,390);
	line(400,400,0,380);
	line(400,400,0,370);
	line(400,400,0,360);
	line(400,400,0,350);

	lineX = lineX - 10;
	lineY = lineY - 10;

	fill(255,0,144);
	ellipse(mouseX,mouseY,50,50);
	
	//fill(255, 0, 0, 100);
	//stroke(0,255,0);
	//rect(mouseX, mouseY,25,75,5);
	//rectMode(CENTER);
	fill(255,0,144,100);
	noStroke();
	ellipse(cX,400,50,50);
	cX = cX - 1;

	
	
	//fill(220, 120, 50);
	//stroke('white');
	//quad(38,31,86,20,69,63,30,76);
	//quad(362,369,314,380,331,337,370,334);
	

}

function mousePressed(){
	background(random(100),random(100),random(100));
}