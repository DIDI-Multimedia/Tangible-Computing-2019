function setup(){

	let canvas = createCanvas(windowWidth/3,windowWidth/3)
	strokeWeight(20)

	canvas.parent('sketch-holder');
}
	
function draw(){
background(255)
 if (mouseIsPressed) {
 	
    stroke(random(255),random(255),random(255));
    ellipse(mouseX - 1, mouseY, mouseX + 1, mouseY);
  } else {
    stroke(0);
  }
  line(mouseX - 1, mouseY, mouseX + 1, mouseY);

	
}
