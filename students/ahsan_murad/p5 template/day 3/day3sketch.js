// Sketch Title - for MuW201 Tangible Computing, 2019
// Ahsan Murad 
// GitHub Username
// Date 
let c1X = 400;
let c2Y = 400;
let c3X = 400;
let c3Y = 400;
let c4Y = 400;
let c5Y = 400;
let c6X = 800;
let c7X = 400;
let c7Y = 400;
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
	stroke(252,102,0,200); // orange shade that i love so much - change HERE for LINE <---
	strokeWeight(3);
	//line(mouseX,mouseY,windowWidth/4,windowWidth/4)
	//line(25,0,800,800);
	line(0,0,800,800);
	line(800,0,0,800);
	line(400,0,400,800);
	line(0,400,800,400);
	line(400,400,lineX,0);
	line(400,400,0,lineY);

	lineX = lineX - 10;
	lineY = lineY - 10;

	//fill(255,0,144); - awesome purple 
	
	//fill(255, 0, 0, 100);
	//stroke(0,255,0);
	//rect(mouseX, mouseY,25,75,5);
	//rectMode(CENTER);
	
	fill(255,0,144,100); // for ellipse change HERE! <----
	noStroke();
	
	//middle to left = c1X
	ellipse(c1X,400,50,50);
	c1X = c1X - 1;

	//middle to bottom left - c2Y
	ellipse(c1X,c2Y,50,50);
	c2Y = c2Y + 1;

	//middle to bottom right
	ellipse(c3X,c3Y,50,50);
	c3Y = c3Y + 1;
	c3X = c3X + 1;

	//middle to top
	ellipse(400,c4Y,50,50);
	c4Y = c4Y - 1;

	//middle to bottom
	ellipse(400,c5Y,50,50);
	c5Y = c5Y + 1;

	//middle to right
	fill(57,255,20);
	ellipse(c6X,400,50,50);
	c6X--;
	if(c6X<400){
		c6X++;
	}

	//middle to top right -> c7Y
	ellipse(c7X,c7Y,50,50);
	c7X++; //changing "c7X = c7X + 1" to simply entering "c7X++"" from now
	c7Y--;
	if(c7X>800,c7Y<0){
		c7X=--;
		c7Y++;
	}

	//function mousePressed(){
	fill(252,102,0,200); // for mouseX ellipse change HERE! <---- currently set to Orange same as line
	ellipse(mouseX,mouseY,50,50);

	for (var x=0,y=0; x<400,y<400;x=x+50,y=y+50){
    fill(255,0,200);
    ellipse(x,y,25,25);
  }

  	for (var y=400; y<800;y=y+50){
  		fill(252,102,0,200);
  		ellipse(400,y,25,25);
  	}
//}



	
	
	//fill(220, 120, 50);
	//stroke('white');
	//quad(38,31,86,20,69,63,30,76);
	//quad(362,369,314,380,331,337,370,334);
	

}

//function mousePressed(){
//	fill(255,0,144,100);
//	ellipse(mouseX,mouseY,50,50);
	//background(random(100),random(100),random(100));
//}