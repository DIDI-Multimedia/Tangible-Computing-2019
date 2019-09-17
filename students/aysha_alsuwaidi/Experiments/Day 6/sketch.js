
// SP: Check your indentations and spacing

var y = 0.5


	function setup(){

		let canvas = createCanvas(windowWidth/3,windowWidth/3)
		canvas.parent('sketch-holder');
	
	}

	function draw(){

<<<<<<< HEAD
		 background(113,189,58); 
 		 y = y + 0.5;
=======
		background(113,189,58); 
		y = y + 0.5;

>>>>>>> 9c67cebbf31b37ee6f4f0967b00072cbd18c6af5
  		if (y < 0) {

  			y = height;
  			fill(147,232,85)
 			ellipse(250, 1, 120, y);
 			fill(156,219,110) 	
 			ellipse(170, 1, 150, y);
 		 	noStroke()
 		 }

 	}