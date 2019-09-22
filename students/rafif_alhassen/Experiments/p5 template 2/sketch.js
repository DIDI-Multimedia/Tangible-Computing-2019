// Sketch Title - for MuW201 Tangible Computing, 2019
// Firstname Lastname 
// GitHub Username
// Date 

function setup(){

<<<<<<< HEAD
	let canvas = createCanvas(windowWidth/4,windowWidth/4)
=======
	let canvas = createCanvas(windowWidth,windowHeight)
>>>>>>> 9c67cebbf31b37ee6f4f0967b00072cbd18c6af5
	
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

<<<<<<< HEAD
	background(0)
=======
	background(255)
>>>>>>> 9c67cebbf31b37ee6f4f0967b00072cbd18c6af5
	var numElements = 10
	textSize(10)
	var step = width/numElements
	var colorStep = 255/numElements


	textAlign(CENTER,CENTER)

for (var x = 0 ; x < numElements; x++){

	for(var y = 0; y < numElements; y++){

		// noStroke()
		stroke(255)
		strokeWeight(second()/3)
		fill(x*colorStep,y*colorStep,255)
		// fill(random(255),random(255),random(255))
		// var string = x + "," + y
		ellipse(x*step,y*step,step,step+1)
<<<<<<< HEAD
=======
		quad(x*step,y*step,step*3,step/3)
>>>>>>> 9c67cebbf31b37ee6f4f0967b00072cbd18c6af5
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


<<<<<<< HEAD

=======
>>>>>>> 9c67cebbf31b37ee6f4f0967b00072cbd18c6af5
