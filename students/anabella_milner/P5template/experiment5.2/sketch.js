
	

	
function setup() {
	createCanvas(1425, 600);

}

function draw() {
	background(0);
	translate(width/2,height/2);
	stroke(500);
	noFill();
	beginShape();
	for (let a = 0; a < TWO_PI; a+=0.1) {
		let r = random(60, 300);
		let x = r * cos(a);
		let y = r * sin(a);
		vertex(x,y);

	}
	endShape();
}


function draw() {
	
	translate(width/2,height/2);
	stroke(500);
	noFill();
	beginShape();
	for (let a = 0; a < TWO_PI; a+=0.1) {
		let r = random(150, 300);
		let x = r * cos(a);
		let y = r * sin(a);
		vertex(x,y);

	}
	endShape(CLOSE);
}

function mousePressed() {
    background(0, 0, 0);
}


	//translate(width/4,height/4);
	//stroke(500);
	//noFill();
	//beginShape();
	//for (let a = 0; a < TWO_PI; a+=0.1) {
	//	let r = random(30, 100);
	//	let x = r * cos(a);
	//	let y = r * sin(a);
	//	vertex(x,y);

	//}
	//endShape();

	//translate(width/2,height/2);
