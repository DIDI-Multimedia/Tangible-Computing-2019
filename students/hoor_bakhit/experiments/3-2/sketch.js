// Sketch Title - for MuW201 Tangible Computing, 2019
// Firstname Lastname 
// GitHub Username
// Date 
let ball1; 
let ball2;
let ball3;
let ball4;
let y = 30 

function setup(){

	let canvas = createCanvas(windowWidth/4,windowWidth/4)
	
	
	// Move the canvas so it's inside our <div id="sketch-holder">.
	canvas.parent('sketch-holder');
	background(34,155,215)
stroke(255); 
  frameRate(50);

    ball1 = new ball();
	ball2 = new ball();
	ball3 = new ball();
	ball4 = new ball();
}

let step =2

function draw(){
background(0)
ball1.move();
  ball1.display();
  ball2.move();
  ball2.display();
  ball3.move();
  ball3.display();
  ball4.move();
  ball4.display();
}


function ball(){
move() {	
	y = y + step;
  if (y > height || y < 0) {
    step *=-1; }
 }
display() {
  ellipse(50, y, 60, 60);
}
}

