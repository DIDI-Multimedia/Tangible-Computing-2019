
var y = 10



	function setup(){

		let canvas = createCanvas(windowWidth/3,windowWidth/3)

		canvas.parent('sketch-holder');
	
	}

	function draw(){

		 background(255,228,57); // Set the background to black
 		 y = y - 1;
  		if (y < 3) {
    	y = height;
  					}
 		 ellipse(1, y, width, y);
 		 rect(0, y, height, y);
 		 noStroke()
}



		
	

