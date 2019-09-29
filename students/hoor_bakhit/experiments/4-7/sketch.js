// Sketch Title - for MuW201 Tangible Computing, 2019
// Firstname Lastname 
// GitHub Username
// Date 

var s;

function setup(){

	let canvas = createCanvas(windowWidth/3,windowWidth/3)
	
	// Move the canvas so it's inside our <div id="sketch-holder">.
	canvas.parent('sketch-holder');
	
	 s = 150;
  mouseX = width/2;
  mouseY = height/2;
  background(0);


}

function draw() {
  //background(255);
  noStroke();
  
  if  (mouseX>(width/2)-s && mouseX<(width/2)+s &&
  mouseY>(height/2)-s && mouseY<(height/2)+s){
  fill('#beffb3');
  triangle(mouseX,mouseY,(width/1)-s,(height/3)-s,(width/1)+s,(height/1)-s);
  fill('#a3f794');
  triangle(mouseX,mouseY,(width/1)+s,(height/3)-s,(width/1)+s,(height/1)+s);
  fill('#86db76');
  triangle(mouseX,mouseY,(width/1)+s,(height/3)+s,(width/1)-s,(height/1)+s);
  fill('##86db76');
  triangle(mouseX,mouseY,(width/1)-s,(height/3)+s,(width/1)-s,(height/1)-s);
  }
}

