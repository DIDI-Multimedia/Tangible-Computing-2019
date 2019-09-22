function setup(){

	let canvas = createCanvas(windowWidth/2,windowWidth/2)
	canvas.parent('sketch-holder');
	background(0)
	
}


function draw(){
	
	stroke(random(255),random(255),random(255))
	strokeWeight(1)
	line(pmouseX/2,pmouseX,mouseX+-random(1,7),mouseY+-random(1,7))

	if(mouseIsPressed){
		fill(255)
		ellipse(mouseX,mouseY,50,50)
	}
}