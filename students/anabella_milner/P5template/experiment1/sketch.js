var r = 0;
var b = 255;
var g = 255;

function setup() {
	createCanvas(1250,500);

}

function draw() {
	r = map(mouseX, mouseY, 600, 0, 255);
	b = map(mouseX, mouseY,600,255,0);
	//g = map(mouseX, mouseY,600, 255,0);
	background(r,0,b)
	

	fill(250, 118, 222, 100);
	ellipse(mouseX, mouseY,64,64);
}