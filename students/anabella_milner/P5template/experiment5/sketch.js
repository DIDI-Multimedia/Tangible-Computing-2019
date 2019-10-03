
	

	

function setup() {
	createCanvas(1425, 700);

}

function draw() {
	background(0);
	translate(width/2,height/2);
	stroke(500);
	noFill();
	beginShape();
	for (let a = 0; a < TWO_PI; a+=0.1) {
		let r = random(110, 180);
		let x = r * cos(a);
		let y = r * sin(a);
		vertex(x,y);

	}
	endShape();

	beginShape();
	for (let a = 0; a < TWO_PI; a+=0.05) {
		let r = random(200, 350);
		let x = r * cos(a);
		let y = r * sin(a);
		vertex(x,y);

	}
	endShape();


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
	beginShape();
	for (let a = 0; a < TWO_PI; a+=0.1) {
		let r = random(30, 50);
		let x = r * cos(a);
		let y = r * sin(a);
		vertex(x,y);

	}
	endShape();


}