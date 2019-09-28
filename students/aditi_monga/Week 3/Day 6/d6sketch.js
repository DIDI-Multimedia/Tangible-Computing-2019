function setup(){

	let canvas = createCanvas(windowWidth,windowWidth/2)
	canvas.parent('sketch-holder');
	
}



function draw(){
	background(0)

	for (var x = 10; x < width; x+=40+mouseX/5) {
		for (var y = 10; y < width; y+=40+mouseY/5){
				stroke(random(255),random(255),random(255))
				strokeWeight(3)
				fill(random(255),random(255),random(255))
				rect (x,y,20-random(-3,3),20)
			}
		}
	}