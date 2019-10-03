// Sketch Title - for MuW201 Tangible Computing, 2019
// Firstname Lastname 
// GitHub Username
// Date 
var circleL = 0;
var circleX = 0;
var circleY = 0;
var circleR = 0;
var circleP = 0;
var circleA = 0;
var circleB = 0;

var circleC = 1425;
var circleD = 1425;
var circleE = 1425;
var circleF = 1425;
var circleG = 1425;
var circleH = 1425;
var circleI = 1425;

//var col = {
  //  r:255,
  //  g:0,
  //  b:0
//};


function setup() {
	createCanvas(1425,400);
}

function draw() {
	background(0, 0, 0);
	fill(circleL,150,200,150);
	//fill(circleX,350, 300, 100);
	//fill(circleY,850, 800, 100);
	//fill(circleR,1050, 500, 100);

		//col.r = random(100,200);
    //col.g = random(100,0);
    //col.b = random(100,200);
	//ellipse
	//fill(col.r, col.g, col.b, 100);



	ellipse(circleL, 50, 80, 80);
	ellipse(circleX, 100, 80, 80);
	ellipse(circleY, 150, 80, 80);
	ellipse(circleR, 200, 80, 80);
	ellipse(circleP, 250, 80, 80);
	ellipse(circleA, 300, 80, 80);
	ellipse(circleB, 350, 80, 80);

		ellipse(circleC, 50, 80, 80);
	ellipse(circleD, 100, 80, 80);
	ellipse(circleE, 150, 80, 80);
	ellipse(circleF, 200, 80, 80);
	ellipse(circleG, 250, 80, 80);
	ellipse(circleH, 300, 80, 80);
	ellipse(circleI, 350, 80, 80);

	circleL = circleL + 0.5;
	circleX = circleX + 1;
	circleY = circleY + 1.5;
	circleR = circleR + 2;
	circleP = circleP + 2.5;
	circleA = circleA + 3;
	circleB = circleB + 3.5;

		circleC = circleC + -0.5;
	circleD = circleD + -1;
	circleE = circleE + -1.5;
	circleF = circleF + -2;
	circleG = circleG + -2.5;
	circleH = circleH + -3;
	circleI = circleI + -3.5;

}