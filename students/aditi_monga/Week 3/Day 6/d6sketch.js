function setup(){

	let canvas = createCanvas(windowWidth,windowWidth/2)
	canvas.parent('sketch-holder');
	
}



function draw(){
	background(0)

	for (var x = 10; x < ; x+=40) {
		strokeWeight(3)
		rect (x,x,20-random(-3,3),20)
	}

}