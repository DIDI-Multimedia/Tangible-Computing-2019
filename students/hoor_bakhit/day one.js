function setup(){

	let canvas = createCanvas(windowWidth/4,windowWidth/4)
	
	// Move the canvas so it's inside our <div id="sketch-holder">.
	canvas.parent('sketch-holder');
	background(random(255),155,215)
	
	background('#222222');
	
	

}



function draw(){

var numElements = 10

var step= width/numElements

for (var x = 0 ;x < numElements; x++){
	for (var y = 0 ; y< numElements; y++){

		box(4, 4, 4, 4, 4)

	}
}