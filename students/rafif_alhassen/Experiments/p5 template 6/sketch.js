// Sketch Title - for MuW201 Tangible Computing, 2019
// Firstname Lastname 
// GitHub Username
// Date 

function setup(){

	let canvas = createCanvas(windowWidth/4,windowWidth/4)
	
	// Move the canvas so it's inside our <div id="sketch-holder">.
	canvas.parent('sketch-holder');
	// background(255,136,182)
}
// 	// textSize(20)

// var numElements = 25
// textSize(10)
// var step = width/numElements
// var colorStep = 255/numElements
// textAlign(CENTER,CENTER)
// // console.log(step)

// // var x = 0
// // var step = windowWidth/numElements

// // console.log('hi')

// // textSize(step)

// for (var x = 0 ; x < numElements; x++){
// 	for(var y = 0; y < numElements; y++){

// 		// noStroke()
// 		stroke(255)
// 		strokeWeight(1)
// 		fill(x*colorStep,y*colorStep,50)
// 		// fill(random(255),random(255),random(255))
// 		// var string = x + "," + y
// 		rect(x*step,y*step,step,step)
// 		// text(string,x*step+16, y*step+6)
// 		fill(0)
// 		// var string = x + "," + y
// 		// text(string,x*step+25,y*step+25)
// 		// rect(x*step,y*step,step,step)

// 	// text(x,x*step,height/2)
// 	// fill(random(255),random(255),random(255))
// 	// ellipse(x*step,height/2,step/2,step/2)

// 		}

// 	}
// }

// text(x,x*step,height/2)
// x++
// text(x,x*step,height/2)
// x++
// text(x,x*step,height/2)

// }

function draw(){

	background(0)
	var numElements = 25
	textSize(10)
	var step = width/numElements
	var colorStep = 255/numElements
	textAlign(CENTER,CENTER)

for (var x = 0 ; x < numElements; x++){

	for(var y = 0; y < numElements; y++){

		// noStroke()
		stroke(255)
		strokeWeight(second()/3)
		fill(x*colorStep,y*colorStep,200)
		// fill(random(255),random(255),random(255))
		// var string = x + "," + y
		translate(width/2, height/2);
		rotate(PI/6.0);
		smooth();
		triangle(x*step,y*step,step,step)
		// ellipse(130,155,250,25)
		stroke(0)
		rect(mouseX,50,mouseY,50)
		fill(50)
		// text(string,x*step+16, y*step+6)
		// fill(0)
		// var string = x + "," + y
		// text(string,x*step+25,y*step+25)
		// rect(x*step,y*step,step,step)

	// text(x,x*step,height/2)
	// fill(random(255),random(255),random(255))
	// ellipse(x*step,height/2,step/2,step/2)

		}

	}
}


