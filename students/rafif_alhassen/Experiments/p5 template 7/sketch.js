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

	background(0);



	noFill();
	// curve(5,26,5,26,73,24,73,61);
	// curve(5,26,73,24,73,61,15,65,);
	// curve(mouseX, 0, mouseX, 100);
	// curve(mouseY, 0, mouseY,100);
	fill(random(255),random(255),random(255));
	strokeWeight(3)
	stroke(0)
	ellipseMode(CENTER);
	let steps = 6;
	for (let i = 0; i <= steps; i++){
		let t = i / steps;
		let x = curvePoint(5,5,73,73,t);
		let y = curvePoint (26,26,24,61,t);
		ellipse(mouseX,50,mouseY,50);
		x = curvePoint (5,73,73,15,t);
		y = curvePoint (26,24,61,65,t);
		ellipse(mouseX,50,mouseY,50);




	}
// 	background(0)
// 	var numElements = 25
// 	textSize(10)
// 	var step = width/numElements
// 	var colorStep = 255/numElements
// 	textAlign(CENTER,CENTER)

// for (var x = 0 ; x < numElements; x++){

// 	for(var y = 0; y < numElements; y++){

// 		// noStroke()
// 		stroke(255)
// 		strokeWeight(second()/3)
// 		fill(x*colorStep,y*colorStep,200)
// 		// fill(random(255),random(255),random(255))
// 		// var string = x + "," + y
// 		rect(x*step,y*step,step,step)
// 		text(string,x*step+16, y*step+6)
// 		fill(0)
// 		var string = x + "," + y
// 		text(string,x*step+25,y*step+25)
// 		rect(x*step,y*step,step,step)

// 	text(x,x*step,height/2)
// 	fill(random(255),random(255),random(255))
// 	ellipse(x*step,height/2,step/2,step/2)

		}