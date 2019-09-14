function setup(){

	let canvas = createCanvas(windowWidth/3,windowWidth/3)
	 img = loadImage('faroosh.png');
	 let value = 0;

	canvas.parent('sketch-holder');
}
	
function draw() {
  fill(value);
  rect(25, 25, 50, 50);
}
function mousePressed() {
  if (value === 0) {
    value = 255;
  } else {
    value = 0;
  }
}