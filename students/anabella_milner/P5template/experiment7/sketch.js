// Sketch Title - for MuW201 Tangible Computing, 2019
// Firstname Lastname 
// GitHub Username
// Date 
var col = {
    r:255,
    g:0,
    b:0
};

function setup (){
	createCanvas(2000,500);
	// background
	background(250, 250, 100, 25);
}

function draw() {
	col.r = random(100,500);
    col.g = random(100,500);
    col.b = random(100,500);

	fill(col.r, col.g, col.b, 100);
	rect(mouseX, mouseY, 35, 35);
 

//rectangle
//fill(200, 250, 200);
//rect(400, 100, 50, 50);
}
	
function mousePressed() {
	background(250, 250, 100, 25);
}

	




