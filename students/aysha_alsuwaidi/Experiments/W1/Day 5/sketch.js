
function setup(){
	
	let canvas = createCanvas(windowWidth/3,windowWidth/3)
	background(255)
	canvas.parent('sketch-holder');
	
}
	
function draw() {
	
	if (mouseIsPressed) {
 	
    stroke(250,224,74);
	line(250,250,mouseX,mouseY);
 
  } else {
    stroke(22,164,195);
  }
 	
	line(250,250,mouseX,mouseY);
	
	
 	
 
}
