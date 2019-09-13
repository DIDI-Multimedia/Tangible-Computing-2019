var x = 50
var y = 100


	function setup(){

		let canvas = createCanvas(windowWidth/3,windowWidth/3)

		canvas.parent('sketch-holder');
	
	}

	function draw(){

		
		 fill(255)

 		fill(random(255),random(0,255),random(255))

		 stroke(random(0,255))

		line(x++,mouseY,mouseX,y)

 		line(x,y,mouseX,mouseY)


		}
	

